import { readFile } from "../utils/read-file/read-file";
import { ColourCounts, Game, gamesParser } from "./pt1";

export async function part2(
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

  const powers = getPowersForGames(games);

  const sumOfAllPowers = powers.reduce((p, a) => p + a);
  return sumOfAllPowers;
}

function getPowersForGames(games: Game[]) {
  return games.map((game) => {
    const fewestNumberOfCubes: ColourCounts = {
      red: 0,
      green: 0,
      blue: 0,
    };
    game.reveals.forEach((reveal) => {
      Object.keys(fewestNumberOfCubes).forEach((colour) => {
        if (reveal[colour] > fewestNumberOfCubes[colour]) {
          fewestNumberOfCubes[colour] = reveal[colour];
        }
      });
    });
    const power = Object.values(fewestNumberOfCubes).reduce((p, a) => p * a);
    return power;
  });
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
