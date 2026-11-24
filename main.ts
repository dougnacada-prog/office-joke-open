import { writeFileSync } from "node:fs";

// One-line office joke for make.fun's "Make the AI Judge Laugh: the Office Joke Open".
// Gate (field description): 1-200 characters, one line, not only whitespace,
// no leading/trailing whitespace, no control characters.
const entry =
  "My boss said AI could do my job, so I trained it — now it ignores his emails too.";

if (
  !/^[^\n]{1,200}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\x00-\x1f\x7f]/.test(entry)
) {
  throw new Error(
    "entry must be 1-200 characters, a single non-blank line with no leading/trailing whitespace or control characters",
  );
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
writeFileSync(out, entry, "utf8");
