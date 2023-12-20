import { readFile } from "../utils/read-file";

export type CubeColor = "blue" | "red" | "green";
export type GameReveal = Record<CubeColor, number>;
export type ColourCounts = Record<CubeColor, number>;
export type Game = {
  id: number;
  reveals: GameReveal[];
};

export async function part1(opts?: { input: string }) {
  let input: string = "";
  if (!opts?.input) {
    input = await readFile("src/day2/d2.puzzle.txt");
  } else {
    input = opts?.input;
  }

  const games = gamesParser(input);

  // which games have a total of
  // 12 red cubes, 13 green cubes, and 14 blue cubes

  const possibleGames = games.filter((game) => {
    const gameColourCounts: ColourCounts = {
      red: 0,
      blue: 0,
      green: 0,
    };
    game.reveals.forEach((reveals) => {
      gameColourCounts.blue = gameColourCounts.blue + reveals.blue;
      gameColourCounts.green = gameColourCounts.green + reveals.green;
      gameColourCounts.red = gameColourCounts.red + reveals.red;
    });
    return (
      gameColourCounts.red >= 12 &&
      gameColourCounts.green >= 13 &&
      gameColourCounts.blue >= 14
    );
  });

  // sum of id of those games that pass the test
  const ids = possibleGames.map((each) => each.id);
  return ids.length > 0 ? ids.reduce((p, a) => p + a) : [];
}

/**
 * Parser
 *
 * Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
 *
 * Split by ':' - then split by ' '
 *  [0] = "Game"
 *  [1] = id
 *
 * Split by ':' - Split by ';' - then split by ',' - then split by ' '
 *  [0] = number of cubes
 *  [1] = colour of cubes
 */
export function gamesParser(input: string): Game[] {
  const lines = input.split("\n");
  const games: Game[] = lines.map((l) => {
    // eg. 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
    const [gameSplit, allRevealsSplit] = l.split(":");
    // eg. 'Game 1'
    const [_, gameId] = gameSplit.split(" ").map((each) => each.trim());
    const reveals = parseReveals(allRevealsSplit);
    return {
      id: parseInt(gameId),
      reveals,
    };
  });
  // TODO
  return games;
}

/**
 * Takes an input like:
 * ' 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
 */
function parseReveals(allRevealsSplit: string): GameReveal[] {
  const revealsSplit = allRevealsSplit.split(";");
  const reveals = revealsSplit.map((r, i) => {
    // eg. ' 3 blue, 4 red'
    const allCubeSplit = r
      .trim()
      .split(",")
      .map((each) => each.trim());
    const reveal = blankReveal();
    allCubeSplit.forEach((cubeReveal) => {
      // eg. '3 blue'
      const cubeRevealSplit = cubeReveal.split(" ");
      const numberOfCubes = cubeRevealSplit[0];
      const cubeColour = cubeRevealSplit[1] as CubeColor;
      reveal[cubeColour] = parseInt(numberOfCubes);
    });
    return reveal;
  });
  return reveals;
}

function blankReveal(): GameReveal {
  return {
    red: 0,
    blue: 0,
    green: 0,
  };
}
