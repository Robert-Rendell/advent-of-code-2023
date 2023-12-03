import { findCalibrationValue, part1, sumAllCalibrationValues } from "./pt1";

describe("Day 1 - Part 1", () => {
  it("should answer the example correctly", async () => {
    const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

    const output = await part1({ input });

    expect(output).toBe(142);
  });

  describe("findCalibrationValue fn", () => {
    it("should parse the calibration value", () => {
      const output = findCalibrationValue("1abc2");

      expect(output).toBe(12);
    });

    it("should parse the calibration value - numbers not first and last", () => {
      const output = findCalibrationValue("pqr3stu8vwx");

      expect(output).toBe(38);
    });
  });

  describe("sumAllCalibrationValues fn", () => {
    it("should parse the calibration value", () => {
      const output = sumAllCalibrationValues([1,2,3,4,5]);

      expect(output).toBe(15);
    });
  });
});
