import { findCalibrationValue, part2 } from "./pt2";

describe("Day 1 - Part 2", () => {
  it("should answer the question correctly", async () => {
    const output = await part2();

    expect(output).toBe(48577);
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
    it("should parse the calibration value 29", () => {
      const output = findCalibrationValue("two1nine");

      expect(output).toBe(29);
    });

    it("should parse the calibration value 83", () => {
      const output = findCalibrationValue("eightwothree");

      expect(output).toBe(83);
    });

    it("should parse the calibration value 13", () => {
      const output = findCalibrationValue("abcone2threexyz");

      expect(output).toBe(13);
    });

    it("should parse the calibration value 24", () => {
      const output = findCalibrationValue("xtwone3four");

      expect(output).toBe(24);
    });

    it("should parse the calibration value 42", () => {
      const output = findCalibrationValue("4nineeightseven2");

      expect(output).toBe(42);
    });

    it("should parse the calibration value 14", () => {
      const output = findCalibrationValue("zoneight234");

      expect(output).toBe(14);
    });

    it("should parse the calibration value 67", () => {
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
      const output = findCalibrationValue(
        "sevensixjczjhjzbj8fnsnrsevenfive2seven",
      );

      expect(output).toBe(77);
    });

    it("should parse the calibration value 27", () => {
      const output = findCalibrationValue("twoone9sixsixninethree7");

      expect(output).toBe(27);
    });

    it("should parse the calibration value 44", () => {
      const output = findCalibrationValue("l4");

      expect(output).toBe(44);
    });

    it("should parse the calibration value --", () => {
      const output = findCalibrationValue("asdflkhsjadfolhsldhf");

      expect(output).toBe(0);
    });

    it("should parse the calibration value 81", () => {
      const output = findCalibrationValue(
        "eightgndhmrfouronexldvdvqnzxqjczfk1",
      );

      expect(output).toBe(81);
    });

    it("should parse the calibration value 74", () => {
      const output = findCalibrationValue("76xkqjzqtwonfour");

      expect(output).toBe(74);
    });

    it("should parse the calibration value 23423432423423", () => {
      const output = findCalibrationValue("23423432423423");

      expect(output).toBe(23);
    });

    it("should parse the calibration value 7mntc", () => {
      const output = findCalibrationValue("7mntc");

      expect(output).toBe(77);
    });
  });
});
