import { readFile } from "../utils/read-file";
import { scratchCardParser } from "./parser/scratch-card-parser";

export async function part2(
  opts: { input: string } | { puzzleFilePath: string },
) {
  let input: string = "";
  if ("puzzleFilePath" in opts) {
    input = await readFile(opts.puzzleFilePath);
  } else {
    input = opts.input;
  }

  const scratchCards = scratchCardParser(input);
}
