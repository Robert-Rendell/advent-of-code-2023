import { CamelCardGame } from "./classes/CamelCardGame";
import { CamelCardsHand } from "./classes/CamelCardsHand";
import { part2 } from "./pt2";

describe("Day 7 - Part 2", () => {
  describe("joker hands", () => {
    it("should calculate T55J5 -> T5555", async () => {
      const hand = new CamelCardsHand({ hand: "T55J5", bid: 0 });
      CamelCardGame.switchToJokerGameMode();
      expect(hand.jokerHand()).toEqual("T5555");
    });

    it("should calculate KTJJT -> KTTTT", async () => {
      const hand = new CamelCardsHand({ hand: "KTJJT", bid: 0 });
      // T is stronger than J in the joker game
      CamelCardGame.switchToJokerGameMode();
      expect(hand.jokerHand()).toEqual("KTTTT");
    });

    it("should calculate QQQJA -> QQQQA", async () => {
      const hand = new CamelCardsHand({ hand: "QQQJA", bid: 0 });
      CamelCardGame.switchToJokerGameMode();
      expect(hand.jokerHand()).toEqual("QQQQA");
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
