import { Almanac } from "./Almanac";

export class AlmanacPt2 extends Almanac {
  getAllSeedMappings() {
    return this.seeds.map((seed) => this.getMappings(seed));
  }

  getLowestSeedLocation() {
    // Pt 1: "What is the lowest location number that corresponds to any of the initial seed numbers?"
    return Math.min(...this.getAllSeedMappings().map((m) => m.location));
  }
}
