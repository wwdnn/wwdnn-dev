import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const css = await readFile(new URL("../src/App.css", import.meta.url), "utf8");
const mobile = css.match(/@media \(max-width: 640px\) \{([\s\S]*)\}\s*$/)?.[1] ?? "";

assert.match(mobile, /\.parallax-layer\s*\{[\s\S]*background-size:\s*cover;/);
assert.match(mobile, /\.card\s*\{[\s\S]*width:\s*min\(78vw,\s*300px\);/);
assert.match(mobile, /\.card\s*\{[\s\S]*aspect-ratio:\s*auto;/);
assert.match(mobile, /\.card-preview\s*\{[\s\S]*height:\s*clamp\(72px,\s*11vh,\s*96px\);/);
assert.match(mobile, /\.card-tag\s*\{[\s\S]*font-size:\s*0\.68rem;/);

console.log("mobile CSS checks passed");
