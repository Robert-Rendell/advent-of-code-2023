import { readFile } from "../utils/read-file/read-file";
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

  return almanac;
}
