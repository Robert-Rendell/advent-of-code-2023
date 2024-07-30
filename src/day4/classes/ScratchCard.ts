import { ExcludeMethods } from "../../types/exclude-methods";

export class ScratchCard {
  id: string;
  winningNumbers: number[];
  yourNumbers: number[];
  numberOfCopies: number;
  cardNumber: number;

  constructor(
    initialValues: Omit<ExcludeMethods<ScratchCard>, "numberOfCopies" | "cardNumber">,
  ) {
    this.id = initialValues.id;
    this.winningNumbers = initialValues.winningNumbers;
    this.yourNumbers = initialValues.yourNumbers;
    this.numberOfCopies = 0;
    this.cardNumber = parseInt(this.id.replace("Card", "").trim());
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

  calculateCardCopies(args: { max: number }): number[] {
    const n = this.cardNumber;
    const matches = this.numberOfMatches();
    const cardCopyNumbers: number[] = [];
    for (let x = n + 1; x < matches + n + 1; x++) {
      if (x <= args.max) {
        cardCopyNumbers.push(x);
      }
    }
    return cardCopyNumbers;
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

  copy(): void {}
}
