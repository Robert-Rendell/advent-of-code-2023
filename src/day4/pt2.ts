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

  const originalScratchCards = scratchCardParser(input);
  const max = originalScratchCards.length + 1;
  const copies1 = originalScratchCards.map((card) => {
    return card.calculateCardCopies({ max });
  });

  console.log(originalScratchCards.map((sc) => sc.cardNumber));

  const allCardCopies = [...copies1.flat()];
  let previouslyCalculatedCopies = copies1;
  for (let x = 1; x < max - 1; x++) {
    const copies = previouslyCalculatedCopies.flat().map((n) => {
      const scratchCard = originalScratchCards.find(
        (sc) => sc.cardNumber === n,
      );
      return scratchCard?.calculateCardCopies({ max }) ?? [];
    });
    allCardCopies.push(...copies.flat());
    previouslyCalculatedCopies = copies;
  }

  console.log("All Copies: " + allCardCopies.length);
  console.log("All Originals: " + originalScratchCards.length);

  // "how many total scratchcards do you end up with?" -->
  return [
    ...originalScratchCards.map((sc) => sc.cardNumber),
    ...allCardCopies,
  ].sort();
}
