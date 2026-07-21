import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const nginx = readFileSync("deploy/nginx/wwdnn.web.id.conf", "utf8");

for (const text of [
    "server_name wwdnn.web.id www.wwdnn.web.id;",
    "root /var/www/portfolio/current;",
    "try_files $uri $uri/ /index.html;",
    'Cache-Control "no-cache"',
    'Cache-Control "public, max-age=31536000, immutable"',
    "ssl_certificate /etc/ssl/cloudflare/wwdnn.web.id.pem;",
    "ssl_certificate_key /etc/ssl/cloudflare/wwdnn.web.id.key;",
]) {
    assert.ok(nginx.includes(text), `missing Nginx directive: ${text}`);
}

const deploy = readFileSync("scripts/deploy.sh", "utf8");

for (const text of [
    ".env.deploy",
    'DEPLOY_HOST:?Set DEPLOY_HOST',
    "npm run lint",
    "npm run check:deploy",
    "npm run build",
    "rsync -az --delete",
    "ln -sfn",
    "sudo nginx -t",
    "sudo systemctl reload nginx",
]) {
    assert.ok(deploy.includes(text), `missing deploy safety step: ${text}`);
}
assert.ok(!deploy.includes("43.157.206.189"), "deploy script must not contain the origin IP");

const envExample = readFileSync(".env.deploy.example", "utf8");
assert.ok(envExample.includes("DEPLOY_HOST=ubuntu@your-server-ip"));
assert.ok(!envExample.includes("43.157.206.189"), "env example must not contain the origin IP");

const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
assert.equal(packageJson.scripts["check:deploy"], "node scripts/assert-deployment-config.mjs");
assert.equal(packageJson.scripts.deploy, "bash scripts/deploy.sh");

console.log("deployment config OK");
