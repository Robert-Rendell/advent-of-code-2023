export function countCharacters(input: string): Record<string, number> {
  const f = {};
  for (const character of input) {
    if (typeof f[character] === "undefined") {
      f[character] = 1;
    } else {
      f[character] += 1;
    }
  }
  return f;
}
