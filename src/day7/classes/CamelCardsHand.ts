import { getEntries } from "../../types/entries";
import { ExcludeMethods } from "../../types/exclude-methods";

export class CamelCardsHand {
  hand: string;
  bid: number;
  constructor(initialValues: ExcludeMethods<CamelCardsHand>) {
    this.bid = initialValues.bid;
    this.hand = initialValues.hand;
  }

  calculateRank(): number {
    return -1;
  }

  calculateHandType() {
    let handType: CamelCardsHandType | undefined;
    getEntries(handTypeCalculations).forEach(([handTypeName, isHandType]) => {
      if (isHandType(this.hand)) {
        handType = handTypeName;
      }
    });
    return handType;
  }
}

export type CamelCardsHandType =
  | "Five of a kind"
  | "Four of a kind"
  | "Full house"
  | "Three of a kind"
  | "Two pair"
  | "One pair"
  | "High card";

const handTypeCalculations: Record<
  CamelCardsHandType,
  (hand: string) => boolean
> = {
  "Five of a kind": function (hand: string): boolean {
    const f = getCardFrequencies(hand);
    return Object.keys(f).length === 1;
  },
  "Four of a kind": function (hand: string): boolean {
    const f = getCardFrequencies(hand);
    return (
      Object.keys(f).length === 2 &&
      Boolean(Object.values(f).find((n) => n === 4))
    );
  },
  "Full house": function (hand: string): boolean {
    const f = getCardFrequencies(hand);
    return (
      Object.keys(f).length === 2 &&
      Boolean(Object.values(f).find((n) => n === 3))
    );
  },
  "Three of a kind": function (hand: string): boolean {
    const f = getCardFrequencies(hand);
    return (
      Object.keys(f).length === 3 &&
      Boolean(Object.values(f).find((n) => n === 3))
    );
  },
  "Two pair": function (hand: string): boolean {
    const f = getCardFrequencies(hand);
    return (
      Object.keys(f).length === 3 &&
      Boolean(Object.values(f).find((n) => n === 2))
    );
  },
  "One pair": function (hand: string): boolean {
    const f = getCardFrequencies(hand);
    return (
      Object.keys(f).length === 4 &&
      Boolean(Object.values(f).find((n) => n === 2))
    );
  },
  "High card": function (hand: string): boolean {
    const f = getCardFrequencies(hand);
    return Object.keys(f).length === 5;
  },
};

function getCardFrequencies(hand: string): Record<string, number> {
  const f = {};
  for (const card of hand) {
    if (typeof f[card] === "undefined") {
      f[card] = 1;
    } else {
      f[card] += 1;
    }
  }
  return f;
}
