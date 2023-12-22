import { part2 } from "./pt2";

describe("Day 3 - Part 2", () => {
  it("should answer the puzzle correctly", async () => {
    const actual = await part2({
      puzzleFilePath: "src/day3/puzzles/d3-puzzle.txt",
    });
    expect(actual).toEqual("-----");
  });

  it("should answer the example correctly", async () => {
    const actual = await part2({
      puzzleFilePath: "src/day3/puzzles/d3-example.txt",
    });
    expect(actual).toEqual(467835);
  });
});
