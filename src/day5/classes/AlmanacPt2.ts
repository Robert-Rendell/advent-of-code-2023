import { ExcludeMethods } from "../../types/exclude-methods";
import { AlmanacSeedRange } from "../models/almanac-seed-range";
import { Almanac } from "./Almanac";

export class AlmanacPt2 extends Almanac {
  seedRanges: AlmanacSeedRange[];

  constructor(initialValues: Omit<ExcludeMethods<AlmanacPt2>, "seeds">) {
    super({ ...initialValues, seeds: [] });
    this.seedRanges = initialValues.seedRanges;
  }

  getLowestSeedLocation() {
    let lowestSeedLocation = Number.MAX_VALUE;
    this.seedRanges.forEach((sr, i) => {
      console.log(sr, `(Progress ${i + 1}/${this.seedRanges.length})`);
      for (let seed = sr.start; seed < sr.start + sr.count; seed++) {
        const mapping = this.getMappings(seed);
        if (mapping.location < lowestSeedLocation) {
          lowestSeedLocation = mapping.location;
          console.log("Lowest seed location updated ->", lowestSeedLocation);
        }
      }
    });
    // Pt 2: "What is the lowest location number that corresponds to any of the initial seed numbers?"
    return lowestSeedLocation;
  }
}
