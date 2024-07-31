import { CamelCardsHand, CamelCardsHandType } from "./classes/CamelCardsHand";
import { part1 } from "./pt1";

describe("Day 7 - Part 1", () => {
  describe("hand types", () => {
    it("should calculate hand type: one pair", () => {
      const hand = new CamelCardsHand({ hand: "32T3K", bid: 0 });
      const handType = hand.handType();
      const expectedHandType: CamelCardsHandType = "One pair";
      expect(handType).toEqual(expectedHandType);
    });
    it("should calculate hand type: two pair", () => {
      const hand = new CamelCardsHand({ hand: "KK677", bid: 0 });
      const handType = hand.handType();
      const expectedHandType: CamelCardsHandType = "Two pair";
      expect(handType).toEqual(expectedHandType);
    });
    it("should calculate hand type: two pair #2", () => {
      const hand = new CamelCardsHand({ hand: "KTJJT", bid: 0 });
      const handType = hand.handType();
      const expectedHandType: CamelCardsHandType = "Two pair";
      expect(handType).toEqual(expectedHandType);
    });
    it("should calculate hand type: three of a kind", () => {
      const hand = new CamelCardsHand({ hand: "T55J5", bid: 0 });
      const handType = hand.handType();
      const expectedHandType: CamelCardsHandType = "Three of a kind";
      expect(handType).toEqual(expectedHandType);
    });
    it("should calculate hand type: three of a kind #2", () => {
      const hand = new CamelCardsHand({ hand: "QQQJA", bid: 0 });
      const handType = hand.handType();
      const expectedHandType: CamelCardsHandType = "Three of a kind";
      expect(handType).toEqual(expectedHandType);
    });
    it("should calculate hand type: five of a kind", () => {
      const hand = new CamelCardsHand({ hand: "AAAAA", bid: 0 });
      const handType = hand.handType();
      const expectedHandType: CamelCardsHandType = "Five of a kind";
      expect(handType).toEqual(expectedHandType);
    });
    it("should calculate hand type: four of a kind", () => {
      const hand = new CamelCardsHand({ hand: "AA8AA", bid: 0 });
      const handType = hand.handType();
      const expectedHandType: CamelCardsHandType = "Four of a kind";
      expect(handType).toEqual(expectedHandType);
    });
    it("should calculate hand type: Full house", () => {
      const hand = new CamelCardsHand({ hand: "23332", bid: 0 });
      const handType = hand.handType();
      const expectedHandType: CamelCardsHandType = "Full house";
      expect(handType).toEqual(expectedHandType);
    });
    it("should calculate hand type: High card", () => {
      const hand = new CamelCardsHand({ hand: "12345", bid: 0 });
      const handType = hand.handType();
      const expectedHandType: CamelCardsHandType = "High card";
      expect(handType).toEqual(expectedHandType);
    });
  });

  describe("sorting hands", () => {
    // it("should rank the hands", async () => {
    //   // strongest rank is the last
    //   const expectedRanks = ["32T3K", "KTJJT", "KK677", "T55J5", "QQQJA"];
    //   expect(camelCardsGame.sort().map((hand) => hand.hand)).toEqual(
    //     expectedRanks,
    //   );
    // });
    it("should rank the hands", async () => {
      const camelCardsGame = await part1({
        puzzleFilePath: "src/day7/puzzles/d7-example.txt",
      });
      // strongest rank is the last
      const expectedRanks = ["32T3K", "KTJJT", "KK677", "T55J5", "QQQJA"];
      expect(camelCardsGame.sort().map((hand) => hand.hand)).toEqual(
        expectedRanks,
      );
    });
  });

  it("should answer the example correctly", async () => {
    const camelCardsGame = await part1({
      puzzleFilePath: "src/day7/puzzles/d7-example.txt",
    });
    expect(camelCardsGame.totalWinnings()).toEqual(6440);
  });

  it("should answer the puzzle correctly", async () => {
    const camelCardsGame = await part1({
      puzzleFilePath: "src/day7/puzzles/d7-puzzle.txt",
    });

    // Answers
    // 1) 251201528 - too low
    expect(camelCardsGame.totalWinnings()).not.toEqual(251201528);

    expect(camelCardsGame.totalWinnings()).toEqual("-----");
  });
});
