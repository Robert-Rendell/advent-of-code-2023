import { Game, gamesParser, part1 } from "./pt1";

const exampleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

describe("Day x - Part 1", () => {
  it("should answer the puzzle correctly", async () => {
    const actual = await part1({ puzzleFilename: "src/day2/d2.puzzle.txt" });

    // 1. expect(actual).toEqual(231); ---> Too low
    expect(actual).toEqual(231);
  });
  it("should answer the example correctly", async () => {
    const actual = await part1({ input: exampleInput });

    expect(actual).toEqual(8);
  });

  describe("parser function", () => {
    it("should parse the first two lines of example input", () => {
      const games = gamesParser(exampleInput);

      // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
      const expectedGame1: Game = {
        id: 1,
        reveals: [
          // 3 blue, 4 red
          {
            red: 4,
            green: 0,
            blue: 3,
          },
          // 1 red, 2 green, 6 blue
          {
            red: 1,
            green: 2,
            blue: 6,
          },
          // 2 green
          {
            red: 0,
            green: 2,
            blue: 0,
          },
        ],
      };

      // Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
      const expectedGame2: Game = {
        id: 2,
        reveals: [
          // 1 blue, 2 green
          {
            red: 0,
            green: 2,
            blue: 1,
          },
          // 3 green, 4 blue, 1 red
          {
            red: 1,
            green: 3,
            blue: 4,
          },
          // 1 green, 1 blue
          {
            red: 0,
            green: 1,
            blue: 1,
          },
        ],
      };
      const expectedGames: Game[] = [expectedGame1, expectedGame2];
      expect(games.slice(0, 2)).toEqual(expectedGames.slice(0, 2));
    });
  });
});
