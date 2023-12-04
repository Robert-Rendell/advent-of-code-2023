import { readFile } from "../utils/read-file";

/**
 * On each line, the calibration value can be found by
 * combining the first digit and the last digit (in that
 * order) to form a single two-digit number.
 */
export function findCalibrationValue(line: string) {
  const results = line.match(/\d{1}/g);
  if (results) {
    if (results.length === 1) {
    }
    let v = 0;
    v = parseInt(results[0] + results[results.length - 1]);
    console.log(v);
    return v;
  }
  return 0;
}

/**
 * What is the sum of all of the calibration values?
 */
export function sumAllCalibrationValues(calibrationValues: number[]) {
  return calibrationValues.reduce((p, a) => p + a);
}

export async function part1(opts?: { input: string }) {
  let input: string = "";
  if (!opts?.input) {
    input = await readFile("src/day1/puzzles/p1.puzzle.txt");
  }

  const lines = (opts?.input ? opts.input : input).split("\n");
  const calibrationValues = lines.map((l) => findCalibrationValue(l));
  const total = sumAllCalibrationValues(calibrationValues);
  return total;
}
