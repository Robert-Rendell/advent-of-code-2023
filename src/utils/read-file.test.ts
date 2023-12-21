import { readFile } from "./read-file";

describe("Day 1 - Part 1", () => {
  it("should answer the example correctly", async () => {
    const result = await readFile("./src/utils/test.txt");
    expect(result.split("\n")).toEqual(["hello", "multiline", "foobar"])
  });
});
