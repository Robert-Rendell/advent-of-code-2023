import { scratchCardParser } from "./parser/scratch-card-parser";

describe("Day 4 - Part 2 - Scratch card tests", () => {
  describe("small card", () => {
    const card = "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53";
    it("should calculate the number of matches correctly", async () => {
      const actual = scratchCardParser(card);
      expect(actual[0].numberOfMatches()).toEqual(4);
    });

    it("should parse the scratch card id correctly", async () => {
      const actual = scratchCardParser(card);
      expect(actual[0].id).toEqual("Card 1");
    });

    it("should parse the scratch card number correctly", async () => {
      const actual = scratchCardParser(card);
      expect(actual[0].cardNumber()).toEqual(1);
    });

    it("should calculate winning card copies correctly", async () => {
      const actual = scratchCardParser(card);
      expect(actual[0].calculateCardCopies({ max: 10 })).toEqual([2, 3, 4, 5]);
    });
  });

  describe("large card", () => {
    const card =
      "Card   1: 61 73 92 28 96 76 32 62 44 53 | 61 17 26 13 92  5 73 29 53 42 62 46 96 32 21 97 99 28 12  4  7 44 19 71 76";
    it("should calculate the number of matches correctly", async () => {
      const actual = scratchCardParser(card);
      expect(actual[0].numberOfMatches()).toEqual(10);
    });

    it("should parse the scratch card id correctly", async () => {
      const actual = scratchCardParser(card);
      expect(actual[0].id).toEqual("Card   1");
    });

    it("should parse the scratch card number correctly", async () => {
      const actual = scratchCardParser(card);
      expect(actual[0].cardNumber()).toEqual(1);
    });

    it("should calculate winning card copies correctly", async () => {
      const actual = scratchCardParser(card);
      expect(actual[0].calculateCardCopies({ max: 200 })).toEqual([
        2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
      ]);
    });
  });
});
