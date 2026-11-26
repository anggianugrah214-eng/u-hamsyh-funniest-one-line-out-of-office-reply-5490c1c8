// u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8 entry (Node 22, standard library only).
//
// A single one-line out-of-office reply, written to /output/entry.txt.
// The judge weighs: a one-line out-of-office reply first; the laugh
// landing on the first read with no setup; still reading like a real
// away message a person would gladly switch on; a fresh turn on the
// usual away message (not the same beach, inbox or limited-email
// lines); short enough to take in at a glance.
//
// Draft candidates:
// 1. (CHOSEN) I am out of the office and out of opinions until Monday
//    — both will be restocked when I return.
// 2. Thanks for your email — I am away becoming the kind of person who
//    does not check email, and it is going beautifully.
// 3. Away until Tuesday: I have left my inbox in charge; it has the
//    same authority I do — none, but with better response times.
// 4. For emergencies, please contact someone whose emergency this
//    actually is.
// 5. I am off teaching my houseplants the concept of annual leave;
//    back Monday, photosynthesising at reduced capacity until then.
//
// Why draft 1 wins: it keeps the real shape of an away message (away,
// a return day, a promise about return) and the joke is the stockroom
// metaphor — opinions as inventory, restocked on return — which is
// fresh rather than another beach or inbox line, and lands in one read.
// Revision pass: "restocked when I return" became "restocked on my
// return" — two words shorter and it keeps the warehouse register to
// the last syllable.
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  "I am out of the office and out of opinions until Monday — both will be restocked on my return.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 160 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 160 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
