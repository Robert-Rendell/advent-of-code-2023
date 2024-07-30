import { readFile } from "../utils/read-file";
import { almanacParser } from "./parser/almanac-parser";
import { seedParser } from "./parser/pt2-seed-parser";

export async function part2(
  opts: { input: string } | { puzzleFilePath: string },
) {
  let input: string = "";
  if ("puzzleFilePath" in opts) {
    input = await readFile(opts.puzzleFilePath);
  } else {
    input = opts.input;
  }

  const almanac = almanacParser(input, seedParser);

  return almanac;
}
