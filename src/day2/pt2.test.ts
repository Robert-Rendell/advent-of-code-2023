import { exampleInput } from "./pt1.test";
import { part2 } from "./pt2";

describe("Day 2 - Part 2", () => {
  it("should answer the puzzle correctly", async () => {
    const actual = await part2({ puzzleFilename: "src/day2/d2.puzzle.txt" });

    expect(actual).toEqual(60948);
  });

  it("should answer the example correctly", async () => {
    const actual = await part2({ input: exampleInput });

    expect(actual).toEqual(2286);
  });
});
