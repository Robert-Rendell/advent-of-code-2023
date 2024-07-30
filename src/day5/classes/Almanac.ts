import { ExcludeMethods } from "../../types/exclude-methods";

type AlmanacMap = Record<number, number>;
type AlmanacMetric =
  | "seed"
  | "soil"
  | "fertiliser"
  | "water"
  | "light"
  | "temp"
  | "humidity"
  | "location";
export type AlmanacBreakdown = Record<AlmanacMetric, number>;
export class Almanac {
  seeds: number[];
  seedToSoilMap: AlmanacMap;
  soilToFertiliserMap: AlmanacMap;
  fertiliserToWaterMap: AlmanacMap;
  waterToLightMap: AlmanacMap;
  lightToTemperatureMap: AlmanacMap;
  temperatureToHumidity: AlmanacMap;
  humidityToLocation: AlmanacMap;

  constructor(initialValues: ExcludeMethods<Almanac>) {
    this.seeds = initialValues.seeds;
    this.seedToSoilMap = initialValues.seedToSoilMap;
    this.soilToFertiliserMap = initialValues.soilToFertiliserMap;
    this.fertiliserToWaterMap = initialValues.fertiliserToWaterMap;
    this.waterToLightMap = initialValues.waterToLightMap;
    this.lightToTemperatureMap = initialValues.lightToTemperatureMap;
    this.temperatureToHumidity = initialValues.temperatureToHumidity;
    this.humidityToLocation = initialValues.humidityToLocation;
  }

  map(source: number, map: Record<number, number>) {
    const destination: number | undefined = map[source];
    if (typeof destination === "undefined") {
      return source;
    }
    return destination;
  }

  getMappings(seed: number): AlmanacBreakdown {
    const soil = this.map(seed, this.seedToSoilMap);
    const fertiliser = this.map(soil, this.soilToFertiliserMap);
    const water = this.map(fertiliser, this.fertiliserToWaterMap);
    const light = this.map(water, this.waterToLightMap);
    const temp = this.map(light, this.lightToTemperatureMap);
    const humidity = this.map(temp, this.temperatureToHumidity);
    const location = this.map(humidity, this.humidityToLocation);
    return {
      seed,
      soil,
      fertiliser,
      water,
      light,
      temp,
      humidity,
      location,
    } as const;
  }

  getAllSeedMappings() {
    return this.seeds.map((seed) => this.getMappings(seed));
  }

  getLowestSeedLocation() {
    // Pt 1: "What is the lowest location number that corresponds to any of the initial seed numbers?"
    return Math.min(...this.getAllSeedMappings().map((m) => m.location));
  }
}
