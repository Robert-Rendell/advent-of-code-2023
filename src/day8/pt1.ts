import { readFile } from "../utils/read-file/read-file";
import { CamelMap, mapParser } from "./parser/map-parser";

export async function part1(
  opts: { input: string } | { puzzleFilePath: string },
) {
  let input: string = "";
  if ("puzzleFilePath" in opts) {
    input = await readFile(opts.puzzleFilePath);
  } else {
    input = opts.input;
  }

  const [instructions, nodes]: CamelMap = mapParser(input);
  const LR: Record<string, number> = { L: 0, R: 1 };

  let steps = 0;
  let node = Object.keys(nodes)[0]; // sorted by insertion index
  const isFinished = (): boolean => node === "ZZZ";

  while (!isFinished()) {
    for (let i = 0; i < instructions.length; i++) {
      if (nodes[node].includes("ZZZ")) {
        // console.log(
        //   steps,
        //   instructions[i],
        //   ":::",
        //   node,
        //   "has ZZZ",
        //   nodes[node],
        // );
      }
      node = nodes[node][LR[instructions[i]]];
      steps++;
      if (isFinished()) {
        return steps;
      }
    }
  }
  return steps;
}
