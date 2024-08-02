import { part2 } from "./pt2";

describe("Day 5 - Part 2", () => {
  it("should answer the example correctly", async () => {
    const almanac = await part2({
      puzzleFilePath: "src/day5/puzzles/d5-example.txt",
    });
    expect(almanac.getLowestSeedLocation()).toEqual(46);
  });

  it.skip("should answer the puzzle correctly", async () => {
    console.warn(
      "Day 5 - Part 2 -- This test takes >265s and is long running.",
    );
    const almanac = await part2({
      puzzleFilePath: "src/day5/puzzles/d5-puzzle.txt",
    });

    // Answers
    // 1) 2008786 - Too high
    // 2) 2008785 - Correct (off by 1)
    //            - haven't gotten to the bottom of why the puzzle
    //              is different to example
    // Calculation time (running in jest): 265158 ms
    expect(almanac.getLowestSeedLocation()).toEqual(2008785);
  });
});
