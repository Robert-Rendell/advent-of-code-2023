import { part2 } from "./pt2";

describe("Day 4 - Part 2", () => {
  it("should answer the example and the breakdown should be correct", async () => {
    const actual = await part2({
      puzzleFilePath: "src/day4/puzzles/d4-example.txt",
    });
    /* Once all of the originals and copies have been processed, you end up with:
       - 1 instance of card 1,
       - 2 instances of card 2
       - 4 instances of card 3
       - 8 instances of card 4
       - 14 instances of card 5
       - and 1 instance of card 6.
    */
    expect(actual.filter((n) => n === 1).length).toEqual(1);
    expect(actual.filter((n) => n === 2).length).toEqual(2);
    expect(actual.filter((n) => n === 3).length).toEqual(4);
    expect(actual.filter((n) => n === 4).length).toEqual(8);
    expect(actual.filter((n) => n === 5).length).toEqual(14);
    expect(actual.filter((n) => n === 6).length).toEqual(1);
  });

  it("should answer the example correctly", async () => {
    const actual = await part2({
      puzzleFilePath: "src/day4/puzzles/d4-example.txt",
    });
    // In total, this example pile of scratchcards causes you to ultimately have 30 scratchcards!
    expect(actual.length).toEqual(30);
  });

  it("should answer the puzzle correctly", async () => {
    const actual = await part2({
      puzzleFilePath: "src/day4/puzzles/d4-puzzle.txt",
    });
    expect(actual).toEqual("------");
  });
});
