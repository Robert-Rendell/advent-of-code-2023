import { findCalibrationValue, part1, sumAllCalibrationValues } from "./pt1";

describe("Day 1 - Part 1", () => {
  it("should answer the question correctly", async () => {
    const output = await part1();

    expect(output).toBe(54644);
  });

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

    it("should parse the calibration value 1", () => {
      const output = findCalibrationValue("pqr3stu8vwx");

      expect(output).toBe(38);
    });

    it("should parse the calibration value 2", () => {
      const output = findCalibrationValue("a1b2c3d4e5f");

      expect(output).toBe(15);
    });

    it("should parse the calibration value 3", () => {
      const output = findCalibrationValue("treb7uchet");

      expect(output).toBe(77);
    });

    it("should parse the calibration value 4", () => {
      const output = findCalibrationValue("33");

      expect(output).toBe(33);
    });

    it("should parse the calibration value 5", () => {
      const output = findCalibrationValue("11hi22");

      expect(output).toBe(12);
    });

    it("should parse the calibration value 6", () => {
      const output = findCalibrationValue("1122");

      expect(output).toBe(12);
    });
  });

  describe("sumAllCalibrationValues fn", () => {
    it("should parse the calibration value", () => {
      const output = sumAllCalibrationValues([1, 2, 3, 4, 5]);

      expect(output).toBe(15);
    });
  });
});
