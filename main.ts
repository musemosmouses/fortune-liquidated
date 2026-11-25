import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "";
const FORTUNE =
  "You will meet a tall, dark stranger: your liquidation price, waiting patiently at the bottom.";

function main(): void {
  if (OUT_DIR.length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  const target = join(OUT_DIR, "entry.txt");
  writeFileSync(target, FORTUNE, "utf8");
}

main();
