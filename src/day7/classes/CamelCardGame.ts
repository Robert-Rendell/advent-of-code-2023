import { ExcludeMethods } from "../../types/exclude-methods";
import { CamelCardsHand, CamelCardsHandType } from "./CamelCardsHand";

export class CamelCardGame {
  hands: CamelCardsHand[];
  static jokerGameMode: boolean;
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
        // console.log(hand.hand, hand.bid, rank + 1);
        return hand.bid * (rank + 1);
      })
      .reduce((accumulator, currrentValue) => accumulator + currrentValue);
  }

  static handStrength(hand: CamelCardsHand) {
    let handType: CamelCardsHandType;
    if (CamelCardGame.jokerGameMode) {
      handType = hand.jokerHandType();
    } else {
      handType = hand.handType();
    }
    return CamelCardGame.camelCardHandTypeStrength.indexOf(handType);
  }

  static cardStrength(card: string) {
    const index = CamelCardGame.camelCardStrength.indexOf(card);
    if (index === -1) {
      throw Error(`cardStrength mapping failed ${card}`);
    }
    return index;
  }

  static switchToJokerGameMode() {
    CamelCardGame.jokerGameMode = true;
    CamelCardGame.camelCardStrength = [
      "J",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "T",
      "Q",
      "K",
      "A",
    ];
  }

  /**
   * Higher the array index, higher the strength
   */
  static camelCardStrength = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
    "A",
  ];

  /**
   * Higher the array index, higher the strength
   */
  static camelCardHandTypeStrength = [
    "High card",
    "One pair",
    "Two pair",
    "Three of a kind",
    "Full house",
    "Four of a kind",
    "Five of a kind",
  ] as const;
}
