import { ExcludeMethods } from "../../types/exclude-methods";

export class ScratchCard {
  id: string;
  winningNumbers: number[];
  yourNumbers: number[];

  constructor(initialValues: ExcludeMethods<ScratchCard>) {
    this.id = initialValues.id;
    this.winningNumbers = initialValues.winningNumbers;
    this.yourNumbers = initialValues.yourNumbers;
  }

  /**
   * Winning number matches
   */
  matches(): number[] {
    let yourWinningNumbers: number[] = [];
    this.yourNumbers.forEach((yn) => {
      if (this.winningNumbers.includes(yn)) {
        yourWinningNumbers.push(yn);
      }
    });
    return yourWinningNumbers;
  }

  numberOfMatches(): number {
    return this.matches().length;
  }
  /**
   * Part 1 - the number of "points" each scratch card is worth
   */
  points(): number {
    const winningNumberMatches = this.numberOfMatches();
    const points =
      winningNumberMatches > 0 ? Math.pow(2, winningNumberMatches - 1) : 0;
    return points;
  }
}
