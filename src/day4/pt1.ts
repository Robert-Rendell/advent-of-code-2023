import { readFile } from "../utils/read-file";

export async function part1(
  opts: { input: string } | { puzzleFilePath: string },
) {
  let input: string = "";
  if ("puzzleFilePath" in opts) {
    input = await readFile(opts.puzzleFilePath);
  } else {
    input = opts.input;
  }

  const scratchCards = scratchCardParser(input);

  // How many points are they worth in total?
  return scratchCards.map((sc) => sc.value()).reduce((p, c) => p + c);
}

/**
 * eg. Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
 */
function scratchCardParser(input: string): ScratchCard[] {
  const lines = input.split("\n");
  return lines.map((line) => {
    const [cardNumber, scratchCard] = line.split(":");

    // Winning Numbers | Your Numbers
    // ------------------------------------------
    // '41 48 83 86 17 | 83 86  6 31 17  9 48 53'
    const [winningNumbers, yourNumbers] = scratchCard.trim().split("|");

    return new ScratchCard({
      id: cardNumber,
      winningNumbers: cleanNumbers(winningNumbers),
      yourNumbers: cleanNumbers(yourNumbers),
    });
  });
}

function cleanNumbers(input: string): number[] {
  return input
    .trim()
    .replace(/  /g, " ")
    .split(" ")
    .map((n) => parseInt(n));
}
class ScratchCard {
  id: string;
  winningNumbers: number[];
  yourNumbers: number[];

  constructor(initialValues: Omit<ScratchCard, "value">) {
    this.id = initialValues.id;
    this.winningNumbers = initialValues.winningNumbers;
    this.yourNumbers = initialValues.yourNumbers;
  }
  value(): number {
    let winningNumberMatches = 0;
    this.yourNumbers.forEach((yn) => {
      if (this.winningNumbers.includes(yn)) {
        winningNumberMatches++;
      }
    });
    const points =
      winningNumberMatches > 0 ? Math.pow(2, winningNumberMatches - 1) : 0;
   return points;
  }
}
