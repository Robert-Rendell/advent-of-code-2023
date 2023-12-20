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
  const searchSearch = line
    .replace(/oneight/g, "oneeight")
    .replace(/threeight/g, "threeeight")
    .replace(/eighthree/g, "eightthree")
    .replace(/fiveight/g, "fiveeight")
    .replace(/nineight/g, "nineeight")
    .replace(/twone/g, "twoone")
    .replace(/sevenine/g, "sevennine")
    .replace(/eightwo/g, "eighttwo");
  const results = searchSearch.match(
    /\d{1}|one|two|three|four|five|six|seven|eight|nine/g,
  );
  if (results) {
    let v = 0;
    let first = results[0];
    let last = results[results.length - 1];
    const firstWordFound = numberWordMapping.findIndex(
      (word) => word === first,
    );
    const lastWordFound = numberWordMapping.findIndex((word) => word === last);

    if (firstWordFound >= 0) {
      first = "" + (firstWordFound + 1);
    }
    if (lastWordFound >= 0) {
      last = "" + (lastWordFound + 1);
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

  const calibrationValues = lines.map((l) => findCalibrationValue(l.trim()));
  const total = sumAllCalibrationValues(calibrationValues);
  return total;
}
