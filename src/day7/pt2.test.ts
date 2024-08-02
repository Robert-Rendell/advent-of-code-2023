import { CamelCardGame } from "./classes/CamelCardGame";
import { CamelCardsHand } from "./classes/CamelCardsHand";
import { part2 } from "./pt2";

describe("Day 7 - Part 2", () => {
  describe("joker hands", () => {
    beforeEach(() => {
      CamelCardGame.switchToJokerGameMode();
    });
    it("should calculate 32T3K -> 32T3K (the same)", async () => {
      const hand = new CamelCardsHand({ hand: "32T3K", bid: 0 });
      expect(hand.jokerHand()).toEqual("32T3K");
      expect(hand.handType()).toEqual("One pair");
    });
    it("should calculate KK677 -> KK677 (the same)", async () => {
      const hand = new CamelCardsHand({ hand: "KK677", bid: 0 });
      expect(hand.jokerHand()).toEqual("KK677");
      expect(hand.handType()).toEqual("Two pair");
    });
    it("should calculate T55J5 -> T5555", async () => {
      const hand = new CamelCardsHand({ hand: "T55J5", bid: 0 });
      expect(hand.jokerHand()).toEqual("T5555");
      expect(hand.jokerHandType()).toEqual("Four of a kind");
      expect(hand.handType()).toEqual("Three of a kind");
    });

    it("should calculate KTJJT -> KTTTT", async () => {
      const hand = new CamelCardsHand({ hand: "KTJJT", bid: 0 });
      // T is stronger than J in the joker game
      expect(hand.jokerHand()).toEqual("KTTTT");
      expect(hand.jokerHandType()).toEqual("Four of a kind");
      expect(hand.handType()).toEqual("Two pair");
    });

    it("should calculate QQQJA -> QQQQA", async () => {
      const hand = new CamelCardsHand({ hand: "QQQJA", bid: 0 });
      expect(hand.jokerHand()).toEqual("QQQQA");
      expect(hand.jokerHandType()).toEqual("Four of a kind");
      expect(hand.handType()).toEqual("Three of a kind");
    });

    it("should calculate QJJQ2 -> QQQQ2", async () => {
      const hand = new CamelCardsHand({ hand: "QJJQ2", bid: 0 });
      expect(hand.jokerHand()).toEqual("QQQQ2");
      expect(hand.jokerHandType()).toEqual("Four of a kind");
      expect(hand.handType()).toEqual("Two pair");
    });
    it("should calculate JJJJJ -> JJJJJ", async () => {
      const hand = new CamelCardsHand({ hand: "JJJJJ", bid: 0 });
      expect(hand.jokerHand()).toEqual("JJJJJ");
      expect(hand.jokerHandType()).toEqual("Five of a kind");
      expect(hand.handType()).toEqual("Five of a kind");
    });

    it("should calculate 3Q373 -> 3Q373", async () => {
      const hand = new CamelCardsHand({ hand: "3Q373", bid: 0 });
      expect(hand.jokerHand()).toEqual("3Q373");
      expect(hand.jokerHandType()).toEqual("Three of a kind");
      expect(hand.handType()).toEqual("Three of a kind");
    });

    it("should calculate 23J33 -> 23333", async () => {
      const hand = new CamelCardsHand({ hand: "23J33", bid: 0 });
      expect(hand.jokerHand()).toEqual("23333");
      expect(hand.jokerHandType()).toEqual("Four of a kind");
      expect(hand.handType()).toEqual("Three of a kind");
    });

    it("should calculate AJJQJ -> AAAQA", async () => {
      // Where the most frequent card is J
      const hand = new CamelCardsHand({ hand: "AJJQJ", bid: 0 });
      expect(hand.jokerHand()).toEqual("AAAQA");
      expect(hand.jokerHandType()).toEqual("Four of a kind");
      expect(hand.handType()).toEqual("Three of a kind");
    });

    describe("two pairs upgrade to full house could be problematic", () => {
      it("should calculate K8KJ8 -> K8KK8", async () => {
        const hand = new CamelCardsHand({ hand: "K8KJ8", bid: 0 });
        expect(hand.jokerHand()).toEqual("K8KK8");
        expect(hand.jokerHandType()).toEqual("Full house");
        expect(hand.handType()).toEqual("Two pair");
      });

      it("should calculate KJTKT -> KKTKT", async () => {
        const hand = new CamelCardsHand({ hand: "KJTKT", bid: 0 });
        expect(hand.jokerHand()).toEqual("KKTKT");
        expect(hand.jokerHandType()).toEqual("Full house");
        expect(hand.handType()).toEqual("Two pair");
      });

      it("should calculate A66AJ -> A66AA", async () => {
        const hand = new CamelCardsHand({ hand: "A66AJ", bid: 0 });
        expect(hand.jokerHand()).toEqual("A66AA");
        expect(hand.jokerHandType()).toEqual("Full house");
        expect(hand.handType()).toEqual("Two pair");
      });

      it("should calculate AJQAQ -> AAQAQ", async () => {
        const hand = new CamelCardsHand({ hand: "AJQAQ", bid: 0 });
        expect(hand.jokerHand()).toEqual("AAQAQ");
        expect(hand.jokerHandType()).toEqual("Full house");
        expect(hand.handType()).toEqual("Two pair");
      });

      it("should calculate J7676 -> 77676", async () => {
        const hand = new CamelCardsHand({ hand: "J7676", bid: 0 });
        expect(hand.jokerHand()).toEqual("77676");
        expect(hand.jokerHandType()).toEqual("Full house");
        expect(hand.handType()).toEqual("Two pair");
      });
    });
  });

  it("should break ties since the joker takes the lowest value", async () => {
    // JKKK2 weaker than QQQQ2 because J is weaker than Q
    const camelCardGame = await part2({
      input: `QQQQ2 5\nJKKK2 5`,
    });
    expect(camelCardGame.sort().map((hand) => hand.hand)).toEqual([
      "JKKK2",
      "QQQQ2",
    ]);
    expect(camelCardGame.totalWinnings()).toEqual(15);
  });

  it("should break ties since the joker takes the lowest value - inputs opposite way around", async () => {
    // JKKK2 weaker than QQQQ2 because J is weaker than Q
    const camelCardGame = await part2({
      input: `JKKK2 5\nQQQQ2 5`,
    });
    expect(camelCardGame.sort().map((hand) => hand.hand)).toEqual([
      "JKKK2",
      "QQQQ2",
    ]);
    expect(camelCardGame.totalWinnings()).toEqual(15);
  });

  it("should answer the example correctly", async () => {
    const camelCardGame = await part2({
      puzzleFilePath: "src/day7/puzzles/d7-example.txt",
    });
    expect(camelCardGame.totalWinnings()).toEqual(5905);
  });

  it("should answer the puzzle correctly", async () => {
    const camelCardGame = await part2({
      puzzleFilePath: "src/day7/puzzles/d7-puzzle.txt",
    });

    // Answers
    // 1) 251012175 - Too high
    expect(camelCardGame.totalWinnings()).not.toEqual(251012175);
    // 2) 250825971 - eg. "AJJQJ"; If J is the most frequent card in a hand
    //    take the next most frequent card (A in this case) instead
    //    to pretend to be as J is the lowest.
    expect(camelCardGame.totalWinnings()).toEqual(250825971);
  });
});
