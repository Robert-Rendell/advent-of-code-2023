import { mapParser } from "./parser/map-parser";
import { part1 } from "./pt1";

describe("Day 8 - Part 1", () => {
  it("should parse the map", () => {
    const rawMap = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;
    const map = mapParser(rawMap);
    const [instructions, nodes] = map;
    expect(instructions).toEqual("RL");
    expect(nodes["AAA"]).toEqual(["BBB", "CCC"]);
    expect(nodes["BBB"]).toEqual(["DDD", "EEE"]);
    expect(nodes["ZZZ"]).toEqual(["ZZZ", "ZZZ"]);
  });
  it("should answer the example correctly", async () => {
    const actual = await part1({
      puzzleFilePath: "src/day8/puzzles/d8-example.txt",
    });
    expect(actual).toEqual(2);
  });

  it("should answer the second example correctly", async () => {
    const actual = await part1({
      puzzleFilePath: "src/day8/puzzles/d8-example2.txt",
    });
    expect(actual).toEqual(6);
  });

  it("should answer the puzzle correctly", async () => {
    const actual = await part1({
      puzzleFilePath: "src/day8/puzzles/d8-puzzle.txt",
    });
    expect(actual).toEqual(19631);
  });
});
