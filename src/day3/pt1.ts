import { readFile } from "../utils/read-file/read-file";
import { EngineSchematic } from "./EngineSchematic";

export async function part1(
  opts: { input: string } | { puzzleFilePath: string },
) {
  let input: string = "";
  if ("puzzleFilePath" in opts) {
    input = await readFile(opts.puzzleFilePath);
  } else {
    input = opts.input;
  }

  const engineSchematic = new EngineSchematic(input);
  const partNumbers = engineSchematic.getPartNumbers();
  return partNumbers.map((pn) => pn.numberValue()).reduce((p, c) => p + c);
}
