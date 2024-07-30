import { part2 } from "./pt2";

describe("Day 5 - Part 2", () => {
  it("should answer the example correctly", async () => {
    const almanac = await part2({
      puzzleFilePath: "src/day5/puzzles/d5-example.txt",
    });
    expect(almanac.getLowestSeedLocation()).toEqual(46);
  });

  it("should answer the puzzle correctly", async () => {
    const almanac = await part2({
      puzzleFilePath: "src/day5/puzzles/d5-puzzle.txt",
    });

    // Fatal JavaScript invalid size error
    // v8::internal::Runtime_GrowArrayElements
    // Caused by the seed array trying to grow to fit more
    // and it can't because it would be too big.
    expect(almanac).toEqual("------");
  });
});
