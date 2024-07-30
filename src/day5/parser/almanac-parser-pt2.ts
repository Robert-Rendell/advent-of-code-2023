import { AlmanacPt2 } from "../classes/AlmanacPt2";
import { AlmanacSeedRange } from "../models/almanac-seed-range";
import { parseMaps } from "./almanac-parser";

export function almanacParserPt2(input: string): AlmanacPt2 {
  const lines = input.split("\n");

  return new AlmanacPt2({
    seedRanges: seedParser(lines[0]),
    ...parseMaps(lines),
  });
}

function seedParser(seedLine: string): AlmanacSeedRange[] {
  const rawSeedRanges = seedLine.replace("seeds: ", "").match(/\d+ \d+/g);
  if (!rawSeedRanges) return [];

  const seedRanges: AlmanacSeedRange[] = rawSeedRanges.map((sr) => {
    const [start, count] = sr.split(" ").map((n) => parseInt(n));
    return { start, count };
  });
  return seedRanges;
}
