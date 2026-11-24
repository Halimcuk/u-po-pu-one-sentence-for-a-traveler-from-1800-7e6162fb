import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence for a traveler from 1800: a single comparison, a road, carries
// the whole explanation of the modern internet. On that road the three places
// a person from 1800 knows best stand side by side — the post office, the
// library, and the market — so the traveler sees at once that the internet
// gathers every message, every book, and every trade into one place. The
// second half of the same comparison shows what it does: a letter put into
// any box is already at its door while the sender's hand is still on the
// box. Every word is one a person in 1800 could know; no word coined after
// their time appears anywhere.
const SENTENCE =
  "One road holds every post office, library, and market on earth side by side, and a letter dropped in any box reaches its door before you have let go of it.";

// The gate accepts 1 to 200 characters, so refuse to write an over-long sentence.
// Kept at 155 characters: well inside the gate, with every word earning its place.
if (SENTENCE.length < 1 || SENTENCE.length > 200) {
  throw new Error(`Sentence must be 1-200 characters, got ${SENTENCE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), SENTENCE, "utf8");
console.log(`Wrote entry.txt (${SENTENCE.length} characters) to ${outputDir}`);
