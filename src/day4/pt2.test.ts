import { part2 } from "./pt2";

describe("Day 4 - Part 2", () => {
  it("should answer the puzzle correctly", async () => {
    const actual = await part2({
      puzzleFilePath: "src/day4/puzzles/d4-puzzle.txt",
    });
    expect(actual).toEqual("------");
  });

  it("should answer the example correctly", async () => {
    const actual = await part2({
      puzzleFilePath: "src/day4/puzzles/d4-example.txt",
    });
    expect(actual).toEqual(30);
  });
});
