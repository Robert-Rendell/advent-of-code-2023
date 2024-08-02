import { readFile } from "../utils/read-file/read-file";

export type CubeColor = "red" | "green" | "blue";
export type GameReveal = Record<CubeColor, number>;
export type Game = {
  id: number;
  reveals: GameReveal[];
};

export type ColourCounts = Record<CubeColor, number>;

export async function part1(
  opts?: Partial<{ input: string; puzzleFilename: string }>,
) {
  let input: string;
  if (opts?.puzzleFilename) {
    input = await readFile(opts.puzzleFilename);
  } else {
    if (!opts || !opts.input) {
      console.error("No input provided.");
      process.exit(1);
    } else {
      input = opts.input;
    }
  }

  const games = gamesParser(input);
  const possibleGames = filterPossibleGames(games);
  return gameIdTotals(possibleGames);
}

function gameIdTotals(games: Game[]): number {
  const ids = games.map((each) => each.id);
  return ids.length > 0 ? ids.reduce((p, a) => p + a) : 0;
}

function filterPossibleGames(games: Game[]): Game[] {
  const maxCubeColours: ColourCounts = {
    red: 12,
    green: 13,
    blue: 14,
  };
  const possibleGames = games.filter((game) => {
    const possibleReveals = game.reveals.map((reveal) => {
      return (
        reveal.red <= maxCubeColours.red &&
        reveal.green <= maxCubeColours.green &&
        reveal.blue <= maxCubeColours.blue
      );
    });
    return possibleReveals.every((isRevealPossible) => isRevealPossible);
  });
  return possibleGames;
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
