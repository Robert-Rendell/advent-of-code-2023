import { ScratchCard } from "../classes/ScratchCard";

/**
 * eg. Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
 */
export function scratchCardParser(input: string): ScratchCard[] {
  const lines = input.split("\n");
  return lines.map((line) => {
    const [cardNumber, scratchCard] = line.split(":");

    // eg.
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
