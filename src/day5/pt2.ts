import { readFile } from "../utils/read-file";
import { almanacParserPt2 } from "./parser/almanac-parser-pt2";

export async function part2(
  opts: { input: string } | { puzzleFilePath: string },
) {
  let input: string = "";
  if ("puzzleFilePath" in opts) {
    input = await readFile(opts.puzzleFilePath);
  } else {
    input = opts.input;
  }

  const almanac = almanacParserPt2(input);

  return almanac;
}
