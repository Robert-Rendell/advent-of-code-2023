import { Game, gamesParser, part1 } from "./pt1";

export const exampleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

describe("Day 2 - Part 1", () => {
  it("should answer the puzzle correctly", async () => {
    const actual = await part1({ puzzleFilename: "src/day2/d2.puzzle.txt" });

    // 1. expect(actual).toEqual(231); ---> Too low
    // 2. expect(actual).toEqual(485); ---> Too low
    // 3. expect(actual).toEqual(3630); ---> Too high

    // Changed counting algorithm after reading spec again (puts them back in after each reveal)
    expect(actual).toEqual(2169);
  });
  it("should answer the example correctly", async () => {
    const actual = await part1({ input: exampleInput });

    expect(actual).toEqual(8);
  });

  describe("checking specific games from the puzzle", () => {
    describe("valid games", () => {
      it("should mark game 7 as valid", async () => {
        const actual = await part1({
          input:
            "Game 7: 1 blue, 3 red, 3 green; 4 green; 1 blue, 6 red, 5 green",
        });
        const sumOfTheIds = 7;
        expect(actual).toEqual(sumOfTheIds);
      });
      it("should mark game 19 as valid", async () => {
        const actual = await part1({
          input:
            "Game 19: 3 blue, 3 red; 1 blue, 2 red, 4 green; 4 green, 2 red; 7 blue, 1 red",
        });
        expect(actual).toEqual(19);
      });

      it("should mark game 46 as valid", async () => {
        const actual = await part1({
          input: "Game 46: 7 blue, 1 red; 1 green, 2 blue, 2 red; 3 red",
        });

        const sumOfTheIds = 46;
        expect(actual).toEqual(sumOfTheIds);
      });

      it("should mark game 100 as valid", async () => {
        const actual = await part1({
          input:
            "Game 100: 8 red, 2 blue, 1 green; 2 blue, 4 red, 2 green; 9 red, 1 green; 2 green, 2 red; 3 red, 5 blue; 5 blue, 8 red",
        });
        const sumOfTheIds = 100;
        expect(actual).toEqual(sumOfTheIds);
      });

      it("should mark game 64 as valid", async () => {
        const actual = await part1({
          input:
            "Game 64: 5 red, 1 blue, 5 green; 10 red, 4 green, 2 blue; 8 red, 1 blue",
        });

        const sumOfTheIds = 64;
        expect(actual).toEqual(sumOfTheIds);
      });

      it("should mark game 99 as valid", async () => {
        const actual = await part1({
          input:
            "Game 99: 3 blue, 8 green, 1 red; 4 green, 1 blue, 2 red; 1 red, 4 green; 2 blue, 4 green",
        });

        const sumOfTheIds = 99;
        expect(actual).toEqual(sumOfTheIds);
      });

      it("should mark game 91 as valid", async () => {
        const actual = await part1({
          input:
            "Game 91: 1 green; 9 green, 2 red, 2 blue; 3 blue, 12 green, 1 red; 2 red, 1 blue, 6 green",
        });
        const sumOfTheIds = 91;
        expect(actual).toEqual(sumOfTheIds);
      });
    });

    describe("invalid games", () => {
      it("should mark game 6 as invalid", async () => {
        const actual = await part1({
          input:
            "Game 6: 1 green, 4 red; 1 blue, 19 red, 5 green; 15 red, 1 green, 1 blue; 8 green, 12 red; 19 green, 7 red; 2 blue, 14 red, 12 green",
        });
        // 19 red - invalid
        const sumOfTheIds = 0;
        expect(actual).toEqual(sumOfTheIds);
      });

      it("should mark game 8 as invalid", async () => {
        const actual = await part1({
          input:
            "Game 8: 1 green; 1 green, 16 red, 1 blue; 3 red, 1 green, 1 blue; 1 green; 2 blue; 9 red",
        });
        const sumOfTheIds = 0;
        expect(actual).toEqual(sumOfTheIds);
      });

      it("should mark game 15 as invalid", async () => {
        const actual = await part1({
          input:
            "Game 15: 17 blue, 5 red, 1 green; 1 green, 2 red; 3 red, 2 green; 11 blue, 4 red, 2 green",
        });
        const sumOfTheIds = 0;
        expect(actual).toEqual(sumOfTheIds);
      });

      it("should mark game 17 as invalid", async () => {
        const actual = await part1({
          input:
            "Game 17: 17 red, 9 blue; 19 red, 9 blue, 2 green; 18 red, 1 green, 8 blue; 10 blue, 2 red, 1 green; 7 red, 5 blue, 1 green; 2 green, 2 red, 5 blue",
        });
        const sumOfTheIds = 0;
        expect(actual).toEqual(sumOfTheIds);
      });

      it("should mark game 81 as invalid", async () => {
        const actual = await part1({
          input:
            "Game 81: 8 red, 11 green, 13 blue; 9 red, 14 blue, 14 green; 14 blue, 11 green, 1 red; 5 red, 13 green, 3 blue; 4 green, 9 red, 2 blue; 11 red, 5 blue, 2 green",
        });
        const sumOfTheIds = 0;
        expect(actual).toEqual(sumOfTheIds);
      });
    });
  });

  describe("parser function", () => {
    it("should parse the first three lines of example input", () => {
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

      // Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
      const expectedGame3: Game = {
        id: 3,
        reveals: [
          {
            red: 20,
            green: 8,
            blue: 6,
          },
          {
            red: 4,
            green: 13,
            blue: 5,
          },
          {
            red: 1,
            green: 5,
            blue: 0,
          },
        ],
      };

      // Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
      const expectedGame4: Game = {
        id: 4,
        reveals: [
          {
            red: 3,
            green: 1,
            blue: 6,
          },
          {
            red: 6,
            green: 3,
            blue: 0,
          },
          {
            red: 14,
            green: 3,
            blue: 15,
          },
        ],
      };

      // Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
      const expectedGame5: Game = {
        id: 5,
        reveals: [
          {
            red: 6,
            green: 3,
            blue: 1,
          },
          {
            red: 1,
            green: 2,
            blue: 2,
          },
        ],
      };
      const expectedGames: Game[] = [
        expectedGame1,
        expectedGame2,
        expectedGame3,
        expectedGame4,
        expectedGame5,
      ];

      const games = gamesParser(exampleInput);

      expect(games).toEqual(expectedGames);
    });
  });
});
