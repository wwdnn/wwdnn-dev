#!/usr/bin/env bash
set -euo pipefail

if [[ -f .env.deploy ]]; then
    set -a
    . ./.env.deploy
    set +a
fi

host="${DEPLOY_HOST:?Set DEPLOY_HOST in .env.deploy or the shell environment}"
root="/var/www/portfolio"
release="$(date -u +%Y%m%d%H%M%S)"

npm run lint
npm run check:deploy
npm run build

ssh "$host" "mkdir -p '$root/releases/$release'"
rsync -az --delete dist/ "$host:$root/releases/$release/"

ssh "$host" bash -s -- "$root" "$release" <<'REMOTE'
set -euo pipefail

root="$1"
release="$2"
target="$root/releases/$release"
current="$root/current"
previous="$(readlink -f "$current" || true)"

ln -sfn "$target" "$current"

if sudo nginx -t; then
    sudo systemctl reload nginx
else
    if [[ -n "$previous" ]]; then
        ln -sfn "$previous" "$current"
    else
        rm -f "$current"
    fi
    rm -rf "$target"
    exit 1
fi

find "$root/releases" -mindepth 1 -maxdepth 1 -type d -printf '%T@ %p\n' \
    | sort -nr \
    | tail -n +3 \
    | cut -d' ' -f2- \
    | xargs -r rm -rf
REMOTE

printf 'deployed %s to %s\n' "$release" "$host"
