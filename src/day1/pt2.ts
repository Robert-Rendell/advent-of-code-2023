import { readFile } from "../utils/read-file";
import { sumAllCalibrationValues } from "./pt1";

const numberWordMapping = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
/**
 * On each line, the calibration value can be found by
 * combining the first digit and the last digit (in that
 * order) to form a single two-digit number.
 *
 * eg. 1,2,3,4,5,6,7,8,9
 * eg. one, two, three, four, five, six, seven, eight, and nine
 */
export function findCalibrationValue(line: string) {
  const results = line.match(
    /\d{1}|one|two|three|four|five|six|seven|eight|nine/g,
  );
  if (results) {
    let v = 0;
    let first = results[0];
    let last = results[results.length - 1];
    const firstFound = numberWordMapping.findIndex((word) => word === first);
    const lastFound = numberWordMapping.findIndex((word) => word === last);
    if (firstFound >= 0) {
      first = "" + firstFound;
    }
    if (lastFound >= 0) {
      last = "" + lastFound;
    }
    v = parseInt(first + last);
    return v;
  }
  return 0;
}

export async function part2(opts?: { input: string }) {
  let input: string = "";
  if (!opts?.input) {
    input = await readFile("src/day1/puzzles/p1.puzzle.txt");
  }

  const lines = (opts?.input ? opts.input : input).split("\n");
  console.error(lines.length);
  const calibrationValues = lines.map((l) => findCalibrationValue(l.trim()));
  const total = sumAllCalibrationValues(calibrationValues);
  return total;
}
