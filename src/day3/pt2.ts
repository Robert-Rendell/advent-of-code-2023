import { readFile } from "../utils/read-file/read-file";
import { EngineSchematic } from "./EngineSchematic";

export async function part2(
  opts: { input: string } | { puzzleFilePath: string },
) {
  let input: string = "";
  if ("puzzleFilePath" in opts) {
    input = await readFile(opts.puzzleFilePath);
  } else {
    input = opts.input;
  }

  const engineSchematic = new EngineSchematic(input);
  const gears = engineSchematic.getGears();
  const gearRatios = engineSchematic.getGearRatios(gears);

  return gearRatios.reduce((p, c) => p + c);
}
