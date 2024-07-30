// almanac = seed map

import { Almanac } from "../classes/Almanac";
import { AlmanacMap } from "../models/almanac-map";

export function almanacParser(input: string): Almanac {
  const lines = input.split("\n");
  const seeds = lines[0]
    .replace("seeds: ", "")
    .split(" ")
    .map((seedStr) => parseInt(seedStr));

  return new Almanac({
    seeds,
    seedToSoilMap: parseMap("seed-to-soil map:", lines),
    soilToFertiliserMap: parseMap("soil-to-fertilizer map:", lines),
    fertiliserToWaterMap: parseMap("fertilizer-to-water map:", lines),
    waterToLightMap: parseMap("water-to-light map:", lines),
    lightToTemperatureMap: parseMap("light-to-temperature map:", lines),
    temperatureToHumidity: parseMap("temperature-to-humidity map:", lines),
    humidityToLocation: parseMap("humidity-to-location map:", lines),
  });
}

function parseMap(mapId: string, lines: string[]): AlmanacMap {
  const rangesIndex = lines.findIndex((line) => line.includes(mapId));
  let nextLine = lines[rangesIndex + 1];
  let i = 0;
  const map: AlmanacMap = {
    ranges: [],
  };
  while (nextLine && nextLine.trim() !== "") {
    let [destination, source, range] = nextLine
      .split(" ")
      .map((n) => parseInt(n));
    map.ranges.push({ destination, source, range });
    i++;
    nextLine = lines[rangesIndex + 1 + i];
  }
  return map;
}
