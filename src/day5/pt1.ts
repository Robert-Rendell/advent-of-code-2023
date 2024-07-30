import { readFile } from "../utils/read-file";
import { almanacParser } from "./parser/almanac-parser";

export async function part1(
  opts: { input: string } | { puzzleFilePath: string },
) {
  let input: string = "";
  if ("puzzleFilePath" in opts) {
    input = await readFile(opts.puzzleFilePath);
  } else {
    input = opts.input;
  }

  const almanac = almanacParser(input);

  // "What is the lowest location number that corresponds to any of the initial seed numbers?" -->
  return almanac;
}
