import { part1 } from "./pt1";

describe("Day 4 - Part 1", () => {
  it("should answer the puzzle correctly", async () => {
    const actual = await part1({
      puzzleFilePath: "src/day4/puzzles/d4-puzzle.txt",
    });
    expect(actual).toEqual("------");
  });

  it("should answer the example correctly", async () => {
    const actual = await part1({
      puzzleFilePath: "src/day4/puzzles/d4-example.txt",
    });
    expect(actual).toEqual("------");
  });
});
