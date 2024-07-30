export function seedParser(seedLine: string): number[] {
  const seedRanges = seedLine.replace("seeds: ", "").match(/\d+ \d+/g);
  if (!seedRanges) return [];

  const seeds: number[] = [];
  for (const range of seedRanges) {
    const [start, count] = range.split(" ").map((n) => parseInt(n));
    for (let i = start; i < start + count; i++) {
      seeds.push(i);
    }
  }
  return seeds;
}
