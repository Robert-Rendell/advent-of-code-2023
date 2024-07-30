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

  console.log(copies1);

  const copies2 = copies1.flat().map((n) => {
    const scratchCard = originalScratchCards.find(
      (sc) => sc.cardNumber() === n,
    );
    return scratchCard?.calculateCardCopies({ max });
  });

  const copies3 = copies2.flat().map((n) => {
    const scratchCard = originalScratchCards.find(
      (sc) => sc.cardNumber() === n,
    );
    return scratchCard?.calculateCardCopies({ max });
  });

  const copies4 = copies3.flat().map((n) => {
    const scratchCard = originalScratchCards.find(
      (sc) => sc.cardNumber() === n,
    );
    return scratchCard?.calculateCardCopies({ max });
  });

  const copies5 = copies4.flat().map((n) => {
    const scratchCard = originalScratchCards.find(
      (sc) => sc.cardNumber() === n,
    );
    return scratchCard?.calculateCardCopies({ max });
  });

  const copies6 = copies5.flat().map((n) => {
    const scratchCard = originalScratchCards.find(
      (sc) => sc.cardNumber() === n,
    );
    return scratchCard?.calculateCardCopies({ max });
  });

  console.log(originalScratchCards);
  console.log(copies1.flat());
  console.log(copies2.flat());
  console.log(copies3.flat());
  console.log(copies4.flat());
  console.log(copies5.flat());
  console.log(copies6.flat());

  const allCopies = [
    ...copies1.flat(),
    ...copies2.flat(),
    ...copies3.flat(),
    ...copies4.flat(),
    ...copies5.flat(),
    ...copies6.flat(),
  ];
  console.log("All Copies: " + allCopies.flat().length);
  console.log("All Originals: " + originalScratchCards.length);

  // "how many total scratchcards do you end up with?" -->
  return [
    ...originalScratchCards.map((sc) => sc.cardNumber()),
    ...allCopies,
  ].sort();
}
