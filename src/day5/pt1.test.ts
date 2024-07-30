import { part1 } from "./pt1";

describe("Day x - Part 1", () => {
  it("should map seed to soil numbers correctly", async () => {
  /*
    Seed number 79 corresponds to soil number 81.
    Seed number 14 corresponds to soil number 14.
    Seed number 55 corresponds to soil number 57.
    Seed number 13 corresponds to soil number 13.
  */
  });

it("should break down the example by each category correctly", async () => {
  /*
    Seed 79, soil 81, fertilizer 81, water 81, light 74, temperature 78, humidity 78, location 82.
    Seed 14, soil 14, fertilizer 53, water 49, light 42, temperature 42, humidity 43, location 43.
    Seed 55, soil 57, fertilizer 57, water 53, light 46, temperature 82, humidity 82, location 86.
    Seed 13, soil 13, fertilizer 52, water 41, light 34, temperature 34, humidity 35, location 35.
  */
  const actual = await part1({
    puzzleFilePath: "src/dayX/puzzles/dX-example.txt",
  });
  expect(actual).toEqual("------");
});
it("should answer the example correctly", async () => {
  const actual = await part1({
    puzzleFilePath: "src/dayX/puzzles/dX-example.txt",
  });
  expect(actual).toEqual(35);
});
  it("should answer the puzzle correctly", async () => {
    const actual = await part1({
      puzzleFilePath: "src/dayX/puzzles/dX-puzzle.txt",
    });
    expect(actual).toEqual("-----------");
  });
});
