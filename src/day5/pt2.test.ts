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

    // Answers
    // 1) 2008786 - Too high
    expect(almanac.getLowestSeedLocation()).toEqual("------");
  });
});
