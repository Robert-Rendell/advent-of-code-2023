import { getEntries } from "../../types/entries";
import { ExcludeMethods } from "../../types/exclude-methods";
import { countCharacters } from "../../utils/count-characters";
import { CamelCardGame } from "./CamelCardGame";

export class CamelCardsHand {
  hand: string;
  bid: number;
  constructor(initialValues: ExcludeMethods<CamelCardsHand>) {
    this.bid = initialValues.bid;
    this.hand = initialValues.hand;
  }

  jokerHand() {
    if (!this.hand.includes("J")) return this.hand;

    const frequencies = countCharacters(this.hand);
    let maxCard: [string, number] = [CamelCardGame.camelCardStrength[0], 0];
    getEntries(frequencies).forEach(([card, frequency]) => {
      const [currentMostFrequentCard, currentMostFrequentCardFrequency] =
        maxCard;
      if (frequency > currentMostFrequentCardFrequency && card !== "J") {
        maxCard = [card, frequency];
      }
      if (frequency === currentMostFrequentCardFrequency) {
        const currentCard = CamelCardGame.cardStrength(currentMostFrequentCard);
        const contenderCard = CamelCardGame.cardStrength(card);
        if (contenderCard > currentCard) {
          maxCard = [card, frequency];
        }
      }
    });
    const [card] = maxCard;
    return this.hand.replace(/J/g, card);
  }

  jokerHandType(): CamelCardsHandType {
    return this.handType(this.jokerHand());
  }

  handType(hand?: string): CamelCardsHandType {
    for (const [handTypeName, isHandType] of getEntries(
      CamelCardsHand.handTypeCalculations,
    )) {
      if (isHandType(hand ?? this.hand)) {
        return handTypeName;
      }
    }
    throw new Error("Fatal Error: Every hand is exactly one type");
  }

  static sortFn(h1: CamelCardsHand, h2: CamelCardsHand) {
    // primary sort - based on hand strength
    const handStrength1 = CamelCardGame.handStrength(h1);
    const handStrength2 = CamelCardGame.handStrength(h2);
    if (handStrength1 > handStrength2) {
      return 1;
    }

    if (handStrength1 < handStrength2) {
      return -1;
    }

    // secondary sort - based on card strength left to right
    const logs: string[] = [];
    for (let i = 0; i < h1.hand.length; i++) {
      const cardStrength1 = CamelCardGame.cardStrength(h1.hand[i]);
      const cardStrength2 = CamelCardGame.cardStrength(h2.hand[i]);
      logs.push(
        `${cardStrength1} > ${cardStrength2} = ${
          cardStrength1 > cardStrength2
        }`,
      );
      if (cardStrength1 > cardStrength2) {
        return 1;
      }
      if (cardStrength1 < cardStrength2) {
        return -1;
      }
    }

    console.error(h1.hand, h2.hand, logs);
    throw new Error("Sorting failed");
  }

  static handTypeCalculations: Record<
    CamelCardsHandType,
    (hand: string) => boolean
  > = {
    "Five of a kind": function (hand: string): boolean {
      const f = countCharacters(hand);
      return Object.keys(f).length === 1;
    },
    "Four of a kind": function (hand: string): boolean {
      const f = countCharacters(hand);
      return (
        Object.keys(f).length === 2 &&
        Boolean(Object.values(f).find((n) => n === 4))
      );
    },
    "Full house": function (hand: string): boolean {
      const f = countCharacters(hand);
      return (
        Object.keys(f).length === 2 &&
        Boolean(Object.values(f).find((n) => n === 3))
      );
    },
    "Three of a kind": function (hand: string): boolean {
      const f = countCharacters(hand);
      return (
        Object.keys(f).length === 3 &&
        Boolean(Object.values(f).find((n) => n === 3))
      );
    },
    "Two pair": function (hand: string): boolean {
      const f = countCharacters(hand);
      return (
        Object.keys(f).length === 3 &&
        Boolean(Object.values(f).find((n) => n === 2))
      );
    },
    "One pair": function (hand: string): boolean {
      const f = countCharacters(hand);
      return (
        Object.keys(f).length === 4 &&
        Boolean(Object.values(f).find((n) => n === 2))
      );
    },
    "High card": function (hand: string): boolean {
      const f = countCharacters(hand);
      return Object.keys(f).length === 5;
    },
  };
}

export type CamelCardsHandType =
  (typeof CamelCardGame.camelCardHandTypeStrength)[number];
