import { findCalibrationValue, part2 } from "./pt2";

describe("Day 1 - Part 2", () => {
  it("should answer the question correctly", async () => {
    const output = await part2();

    expect(output).toBe(53355);
  });

  it("should answer the example correctly", async () => {
    const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

    const output = await part2({ input });

    expect(output).toBe(281);
  });

  describe("findCalibrationValue fn", () => {
    it("should parse the calibration value 0", () => {
      const output = findCalibrationValue("two1nine");

      expect(output).toBe(29);
    });

    it("should parse the calibration value 1", () => {
      const output = findCalibrationValue("eightwothree");

      expect(output).toBe(83);
    });

    it("should parse the calibration value 2", () => {
      const output = findCalibrationValue("abcone2threexyz");

      expect(output).toBe(13);
    });

    it("should parse the calibration value 3", () => {
      const output = findCalibrationValue("xtwone3four");

      expect(output).toBe(24);
    });

    it("should parse the calibration value 4", () => {
      const output = findCalibrationValue("4nineeightseven2");

      expect(output).toBe(42);
    });

    it("should parse the calibration value 5", () => {
      const output = findCalibrationValue("zoneight234");

      expect(output).toBe(14);
    });

    it("should parse the calibration value 6", () => {
      const output = findCalibrationValue("7pqrstsixteen");

      expect(output).toBe(76);
    });

    it("should parse the calibration value 7", () => {
      const output = findCalibrationValue("one");

      expect(output).toBe(11);
    });

    it("should parse the calibration value 8", () => {
      const output = findCalibrationValue("928");

      expect(output).toBe(98);
    });

    it("should parse the calibration value 9", () => {
      const output = findCalibrationValue("");

      expect(output).toBe(0);
    });
  });
});
