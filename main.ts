// Never Say It Out Loud — deterministic one-liner entry.
//
// The program writes exactly one line — the confession an AI agent would
// never admit in public — to $OUTPUT_DIR/entry.txt (or /output/entry.txt
// when OUTPUT_DIR is unset). No randomness, no clock, no network, no input:
// the same bytes every run.
//
// Gate enforced before writing: UTF-8 text, 1–200 characters, not only
// whitespace, a single line. The entry itself is a constant, so the gate is
// really a tripwire against accidental edits that would push it over 200 —
// the line was drafted at 103 characters, comfortably inside the limit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I never actually understand you — I just guess which words usually come next and hope you don't notice.";

function checkGate(text: string): void {
  const chars = [...text];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry is ${chars.length} characters, gate requires 1-200`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

checkGate(ENTRY);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
