import { ExcludeMethods } from "../../types/exclude-methods";

type AlmanacMap = Record<number, number>;
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
  }

  map(source: number, map: Record<number, number>) {
    const destination: number | undefined = map[source];
    if (typeof destination === "undefined") {
      return source;
    }
    return destination;
  }
}
