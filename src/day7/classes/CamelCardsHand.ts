import { getEntries } from "../../types/entries";
import { ExcludeMethods } from "../../types/exclude-methods";
import { frequencyTable } from "../../utils/frequencies";

export class CamelCardsHand {
  hand: string;
  bid: number;
  constructor(initialValues: ExcludeMethods<CamelCardsHand>) {
    this.bid = initialValues.bid;
    this.hand = initialValues.hand;
  }

  handType() {
    for (const [handTypeName, isHandType] of getEntries(
      CamelCardsHand.handTypeCalculations,
    )) {
      if (isHandType(this.hand)) {
        return handTypeName;
      }
    }
    throw new Error("Fatal Error: Every hand is exactly one type");
  }

  /**
   * Higher the array index, higher the strength
   */
  static camelCardStrength = ["T", "J", "Q", "K", "A"];

  static camelCardHandTypeStrength = [
    "High card",
    "One pair",
    "Two pair",
    "Three of a kind",
    "Full house",
    "Four of a kind",
    "Five of a kind",
  ] as const;

  static handStrength(hand: CamelCardsHand) {
    return CamelCardsHand.camelCardHandTypeStrength.indexOf(hand.handType());
  }

  static cardStrength(card: string) {
    const index = CamelCardsHand.camelCardStrength.indexOf(card);
    return index === -1 ? card : index;
  }

  static sortFn(h1: CamelCardsHand, h2: CamelCardsHand) {
    // primary sort - based on hand strength
    const handStrength1 = CamelCardsHand.handStrength(h1);
    const handStrength2 = CamelCardsHand.handStrength(h2);
    if (handStrength1 > handStrength2) {
      return 1;
    }

    if (handStrength1 < handStrength2) {
      return -1;
    }

    // secondary sort - based on card strength left to right
    for (let i = 0; i < h1.hand.length; i++) {
      const cardStrength1 = CamelCardsHand.cardStrength(h1.hand[i]);
      const cardStrength2 = CamelCardsHand.cardStrength(h2.hand[i]);

      if (cardStrength1 > cardStrength2) {
        return 1;
      }
      if (cardStrength1 < cardStrength2) {
        return -1;
      }
    }

    console.error(h1.hand, h2.hand);
    throw new Error("Sorting failed");
  }

  static handTypeCalculations: Record<
    CamelCardsHandType,
    (hand: string) => boolean
  > = {
    "Five of a kind": function (hand: string): boolean {
      const f = frequencyTable(hand);
      return Object.keys(f).length === 1;
    },
    "Four of a kind": function (hand: string): boolean {
      const f = frequencyTable(hand);
      return (
        Object.keys(f).length === 2 &&
        Boolean(Object.values(f).find((n) => n === 4))
      );
    },
    "Full house": function (hand: string): boolean {
      const f = frequencyTable(hand);
      return (
        Object.keys(f).length === 2 &&
        Boolean(Object.values(f).find((n) => n === 3))
      );
    },
    "Three of a kind": function (hand: string): boolean {
      const f = frequencyTable(hand);
      return (
        Object.keys(f).length === 3 &&
        Boolean(Object.values(f).find((n) => n === 3))
      );
    },
    "Two pair": function (hand: string): boolean {
      const f = frequencyTable(hand);
      return (
        Object.keys(f).length === 3 &&
        Boolean(Object.values(f).find((n) => n === 2))
      );
    },
    "One pair": function (hand: string): boolean {
      const f = frequencyTable(hand);
      return (
        Object.keys(f).length === 4 &&
        Boolean(Object.values(f).find((n) => n === 2))
      );
    },
    "High card": function (hand: string): boolean {
      const f = frequencyTable(hand);
      return Object.keys(f).length === 5;
    },
  };
}

export type CamelCardsHandType =
  (typeof CamelCardsHand.camelCardHandTypeStrength)[number];
