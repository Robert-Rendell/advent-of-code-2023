import { Almanac, AlmanacBreakdown } from "./classes/Almanac";
import { part1 } from "./pt1";

describe("Day x - Part 1", () => {
  it("should parse the seed numbers correctly", async () => {
    /*
      seeds: 79 14 55 13
    */
    const actual = await part1({
      puzzleFilePath: "src/day5/puzzles/d5-example.txt",
    });
    const expected = [79, 14, 55, 13];
    expect(actual.seeds).toEqual(expected);
  });

  it("should map the specific seed numbers to soil numbers correctly", async () => {
    /*
    Seed number 79 corresponds to soil number 81.
    Seed number 14 corresponds to soil number 14.
    Seed number 55 corresponds to soil number 57.
    Seed number 13 corresponds to soil number 13.
  */
    const almanac = await part1({
      puzzleFilePath: "src/day5/puzzles/d5-example.txt",
    });
    expect(almanac.map(79, almanac.seedToSoilMap)).toEqual(81);
    expect(almanac.map(14, almanac.seedToSoilMap)).toEqual(14);
    expect(almanac.map(55, almanac.seedToSoilMap)).toEqual(57);
    expect(almanac.map(13, almanac.seedToSoilMap)).toEqual(13);
  });

  it("should break down the example by each category correctly", async () => {
    /*
    Seed 79, soil 81, fertilizer 81, water 81, light 74, temperature 78, humidity 78, location 82.
    Seed 14, soil 14, fertilizer 53, water 49, light 42, temperature 42, humidity 43, location 43.
    Seed 55, soil 57, fertilizer 57, water 53, light 46, temperature 82, humidity 82, location 86.
    Seed 13, soil 13, fertilizer 52, water 41, light 34, temperature 34, humidity 35, location 35.
  */
    const almanac = await part1({
      puzzleFilePath: "src/day5/puzzles/d5-example.txt",
    });
    const expectedBreakdownSeed79: AlmanacBreakdown = {
      seed: 79,
      soil: 81,
      fertiliser: 81,
      water: 81,
      light: 74,
      temp: 78,
      humidity: 78,
      location: 82,
    };
    const expectedBreakdownSeed14: AlmanacBreakdown = {
      seed: 14,
      soil: 14,
      fertiliser: 53,
      water: 49,
      light: 42,
      temp: 42,
      humidity: 43,
      location: 43,
    };
    const expectedBreakdownSeed13: AlmanacBreakdown = {
      seed: 13,
      soil: 13,
      fertiliser: 52,
      water: 41,
      light: 34,
      temp: 34,
      humidity: 35,
      location: 35,
    };
    const expectedBreakdownSeed55: AlmanacBreakdown = {
      seed: 55,
      soil: 57,
      fertiliser: 57,
      water: 53,
      light: 46,
      temp: 82,
      humidity: 82,
      location: 86,
    };
    expect(almanac.getAllSeedMappings().find((v) => v.seed === 79)).toEqual(
      expectedBreakdownSeed79,
    );
    expect(almanac.getAllSeedMappings().find((v) => v.seed === 14)).toEqual(
      expectedBreakdownSeed14,
    );
    expect(almanac.getAllSeedMappings().find((v) => v.seed === 55)).toEqual(
      expectedBreakdownSeed55,
    );
    expect(almanac.getAllSeedMappings().find((v) => v.seed === 13)).toEqual(
      expectedBreakdownSeed13,
    );
  });
  it("should answer the example correctly", async () => {
    const almanac = await part1({
      puzzleFilePath: "src/day5/puzzles/d5-example.txt",
    });

    expect(almanac.getLowestSeedLocation()).toEqual(35);
  });
  it("should answer the puzzle correctly", async () => {
    const almanac = await part1({
      puzzleFilePath: "src/day5/puzzles/d5-puzzle.txt",
    });
    expect(almanac.getLowestSeedLocation()).toEqual("-----------");
  });
});
