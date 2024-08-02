import { readFile } from "../utils/read-file/read-file";
import { CamelCardGame } from "./classes/CamelCardGame";
import { camelCardsParser } from "./parser/camel-cards-parser";

export async function part2(
  opts: { input: string } | { puzzleFilePath: string },
) {
  let input: string = "";
  if ("puzzleFilePath" in opts) {
    input = await readFile(opts.puzzleFilePath);
  } else {
    input = opts.input;
  }

  const hands = camelCardsParser(input);
  CamelCardGame.switchToJokerGameMode();
  return new CamelCardGame({ hands });
}
