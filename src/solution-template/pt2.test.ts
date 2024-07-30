import { part2 } from "./pt2";

describe("Day x - Part 2", () => {
  it("should answer the example correctly", async () => {
    const actual = await part2({
      puzzleFilePath: "src/dayX/puzzles/dX-example.txt",
    });
    expect(actual).toEqual("------");
  });

  it("should answer the puzzle correctly", async () => {
    const actual = await part2({
      puzzleFilePath: "src/dayX/puzzles/dX-puzzle.txt",
    });
    expect(actual).toEqual("------");
  });
});
