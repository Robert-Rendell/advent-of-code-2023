import { Game, gamesParser, part1 } from "./pt1";

describe("Day x - Part 1", () => {
  const exampleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
  Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
  Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
  Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
  Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;
  it("should answer the example correctly", async () => {
    const actual = part1({ input: exampleInput });

    expect(actual).toEqual(8);
  });

  describe("parser function", () => {
    it("should parse the first line of example input", () => {
      const firstGame = exampleInput.split("\n")[0];
      const games = gamesParser(firstGame);

      //  3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
      const expectedGame: Game[] = [
        {
          id: 1,
          reveals: [
            // 3 blue, 4 red
            {
              red: 4,
              green: 0,
              blue: 3,
            },
            // 1 red, 2 green
            {
              red: 1,
              green: 2,
              blue: 6,
            },
            // 6 blue; 2 green
            {
              red: 0,
              green: 2,
              blue: 0,
            },
          ],
        },
      ];
      expect(games).toEqual(expectedGame);
    });
  });
});
