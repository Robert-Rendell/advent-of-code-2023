import { countCharacters } from "./count-characters";

describe("Frequency table", () => {
  it("should count character frequencies in a string", async () => {
    const characterCounts = countCharacters("AJJQJ");
    expect(characterCounts).toEqual({
      A: 1,
      J: 3,
      Q: 1,
    });
  });

  it("should not count character frequencies in an empty string", async () => {
    const characterCounts = countCharacters("");
    expect(characterCounts).toEqual({});
  });
});
