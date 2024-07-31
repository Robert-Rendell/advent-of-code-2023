import { ExcludeMethods } from "../../types/exclude-methods";
import { CamelCardsHand } from "./CamelCardsHand";

export class CamelCardGame {
  hands: CamelCardsHand[];
  constructor(initialValues: ExcludeMethods<CamelCardGame>) {
    this.hands = initialValues.hands;
  }

  /**
   * Sort hands where lowest array index is weakest hand
   */
  sort() {
    return this.hands.sort(CamelCardsHand.sortFn);
  }

  totalWinnings() {
    return this.sort()
      .map((hand, rank) => {
        console.log(hand.hand, hand.bid, rank + 1);
        return hand.bid * (rank + 1);
      })
      .reduce((accumulator, currrentValue) => accumulator + currrentValue);
  }
}
