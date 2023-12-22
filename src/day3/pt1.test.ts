import { part1 } from "./pt1";

describe("Day x - Part 1", () => {
  it("should answer the puzzle correctly", async () => {
    const actual = await part1({
      puzzleFilePath: "src/day3/puzzles/d3-puzzle.txt",
    });
    expect(actual).toEqual(544664);
  });

  it("should answer the example correctly", async () => {
    const actual = await part1({
      puzzleFilePath: "src/day3/puzzles/d3-example.txt",
    });
    expect(actual).toEqual(4361);
  });
});
