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
    expect(camelCardGame.totalWinnings()).toEqual("----");
  });
});
