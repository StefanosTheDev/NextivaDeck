#!/usr/bin/env node
/**
 * Verifies slide-order.json matches origin/Demo-BranchV3 for the published prefix:
 * - local `order` must begin with remote `order` (same ids, same positions)
 * - hiddenSlides, categoryNames must match remote
 * - remote `categories` entries must match local (local may add keys for extra slides)
 *
 * Skip: SKIP_SLIDE_ORDER_CHECK=1
 * Branch override: SLIDE_ORDER_REMOTE_REF=origin/main (default origin/Demo-BranchV3)
 */

import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const slideOrderPath = path.join(root, "slide-order.json");
const REMOTE_REF = process.env.SLIDE_ORDER_REMOTE_REF || "origin/Demo-BranchV3";

function die(msg, code = 1) {
  console.error(msg);
  process.exit(code);
}

if (process.env.SKIP_SLIDE_ORDER_CHECK === "1") {
  console.log("check-slide-order: skipped (SKIP_SLIDE_ORDER_CHECK=1)");
  process.exit(0);
}

function sh(cmd, opts = {}) {
  return execSync(cmd, { encoding: "utf8", cwd: root, stdio: ["ignore", "pipe", "pipe"], ...opts });
}

let remoteRaw;
try {
  sh("git rev-parse --is-inside-work-tree", { stdio: ["ignore", "pipe", "inherit"] });
} catch {
  die("check-slide-order: not a git repository");
}

try {
  sh("git fetch origin --prune 2>&1", { stdio: ["ignore", "pipe", "inherit"] });
} catch {
  die("check-slide-order: git fetch origin failed (network or permissions)");
}

try {
  remoteRaw = sh(`git show ${REMOTE_REF}:slide-order.json`);
} catch {
  die(`check-slide-order: could not read ${REMOTE_REF}:slide-order.json (branch missing?)`);
}

let remote;
let local;
try {
  remote = JSON.parse(remoteRaw);
} catch {
  die("check-slide-order: remote slide-order.json is invalid JSON");
}
try {
  local = JSON.parse(fs.readFileSync(slideOrderPath, "utf8"));
} catch (e) {
  die(`check-slide-order: could not read local slide-order.json: ${e.message}`);
}

const ro = Array.isArray(remote.order) ? remote.order : [];
const lo = Array.isArray(local.order) ? local.order : [];

if (lo.length < ro.length) {
  die(
    `check-slide-order: local order length ${lo.length} < remote ${ro.length} (${REMOTE_REF}).\n` +
      "Local deck is missing slides vs published branch."
  );
}

for (let i = 0; i < ro.length; i++) {
  if (lo[i] !== ro[i]) {
    die(
      `check-slide-order: mismatch at slide ${i + 1} (1-based).\n` +
        `  remote (${REMOTE_REF}): ${ro[i]}\n` +
        `  local:              ${lo[i]}`
    );
  }
}

const rh = JSON.stringify(remote.hiddenSlides ?? []);
const lh = JSON.stringify(local.hiddenSlides ?? []);
if (rh !== lh) {
  die(`check-slide-order: hiddenSlides differs from ${REMOTE_REF}`);
}

const rcn = JSON.stringify(remote.categoryNames ?? []);
const lcn = JSON.stringify(local.categoryNames ?? []);
if (rcn !== lcn) {
  die(`check-slide-order: categoryNames differs from ${REMOTE_REF}`);
}

const rcat = remote.categories && typeof remote.categories === "object" ? remote.categories : {};
const lcat = local.categories && typeof local.categories === "object" ? local.categories : {};
for (const key of Object.keys(rcat)) {
  if (lcat[key] !== rcat[key]) {
    die(
      `check-slide-order: categories["${key}"] differs.\n` +
        `  remote: ${JSON.stringify(rcat[key])}\n` +
        `  local:  ${JSON.stringify(lcat[key])}`
    );
  }
}

const extra = lo.length - ro.length;
console.log(
  `check-slide-order: OK — first ${ro.length} slides match ${REMOTE_REF}` +
    (extra > 0 ? `; local has ${extra} additional slide(s) after the published prefix.` : " (full match).")
);
process.exit(0);
