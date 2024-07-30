import { readFile } from "./read-file";

describe("Read file", () => {
  it("should read test.txt correctly", async () => {
    const result = await readFile("./src/utils/test.txt");
    expect(result.split("\n")).toEqual(["hello", "multiline", "foobar"]);
  });
});
