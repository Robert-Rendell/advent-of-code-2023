import { part1 } from "./pt1";

describe("Day x - Part 1", () => {
  it("should answer the example correctly", async () => {
    const actual = await part1({
      puzzleFilePath: "src/dayX/puzzles/dX-example.txt",
    });
    expect(actual).toEqual("------");
  });

  it("should answer the puzzle correctly", async () => {
    const actual = await part1({
      puzzleFilePath: "src/dayX/puzzles/dX-puzzle.txt",
    });
    expect(actual).toEqual("------");
  });
});
