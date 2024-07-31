import { readFile } from "../utils/read-file";
import { CamelCardGame } from "./classes/CamelCardGame";
import { CamelCardsHand } from "./classes/CamelCardsHand";
import { camelCardsParser } from "./parser/camel-cards-parser";

export async function part1(
  opts: { input: string } | { puzzleFilePath: string },
) {
  let input: string = "";
  if ("puzzleFilePath" in opts) {
    input = await readFile(opts.puzzleFilePath);
  } else {
    input = opts.input;
  }

  const hands = camelCardsParser(input);
  return new CamelCardGame({ hands });
}