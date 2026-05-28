import { execSync, spawn } from "node:child_process";
import path from "node:path";

const repoRoot = process.cwd();

function hasRunningNextDev() {
  try {
    const output = execSync("ps -eo pid=,args=", {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });

    return output
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .some((line) => {
        const firstSpace = line.indexOf(" ");
        const pid = Number(line.slice(0, firstSpace));
        const args = line.slice(firstSpace + 1);
        const isCurrentProcess = pid === process.pid;
        const hasNextChild = args.includes(`${path.join(repoRoot, "node_modules", "next", "dist", "bin", "next")} dev`);
        return !isCurrentProcess && hasNextChild;
      });
  } catch {
    return false;
  }
}

if (hasRunningNextDev()) {
  console.log("A Next dev server is already running for this workspace. Reusing the existing .next output.");
  process.exit(0);
}

execSync("rm -rf .next", {
  cwd: repoRoot,
  stdio: "ignore",
});

const nextBin = path.join(repoRoot, "node_modules", "next", "dist", "bin", "next");
const child = spawn(process.execPath, [nextBin, "dev"], {
  cwd: repoRoot,
  stdio: "inherit",
  env: process.env,
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});