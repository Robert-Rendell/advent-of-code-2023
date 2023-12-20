import { readFile } from "../utils/read-file";

type CubeColor = "blue" | "red" | "green";
type GameReveal = Record<CubeColor, number>;
type Game = {
  id: number;
  reveals: GameReveal[];
};
export async function part1(opts?: { input: string }) {
  let input: string = "";
  if (!opts?.input) {
    input = await readFile("src/day1/puzzles/p1.puzzle.txt");
  }
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
  const reveals = [];

  const lines = input.split("\n");

  const games = lines.map((l) => {
    // eg. 'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
    const [gameSplit, allRevealsSplit] = l.split(":");

    // eg. 'Game 1'
    const [_, gameId] = gameSplit.split(" ");

    // eg. ' 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green'
    const revealsSplit = allRevealsSplit.split(";");
    const reveals = revealsSplit.map((r) => {
      // eg. ' 3 blue, 4 red'
      const allCubeSplit = r
        .trim()
        .split(",")
        .map((each) => each.trim());
      const reveal: GameReveal = {
        red: 0,
        blue: 0,
        green: 0,
      };
      allCubeSplit.forEach((cubeReveal) => {
        // eg. '3 blue'
        const cubeRevealSplit = cubeReveal.split(" ");
        const numberOfCubes = cubeRevealSplit[0];
        const cubeColour = cubeRevealSplit[1] as CubeColor;
        reveal[cubeColour] = parseInt(numberOfCubes);
      });
      return [];
    });
    return {
      id: gameId,
      reveals,
    };
  });
  // TODO
  return [];
}
