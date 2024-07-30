import { AlmanacPt2 } from "../classes/AlmanacPt2";
import { parseMaps } from "./almanac-parser";

export function almanacParserPt2(input: string): AlmanacPt2 {
  const lines = input.split("\n");
  const seeds = seedParser(lines[0]);

  return new AlmanacPt2({
    seeds,
    ...parseMaps(lines),
  });
}

function seedParser(seedLine: string): number[] {
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
