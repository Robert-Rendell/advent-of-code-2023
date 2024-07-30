// almanac = seed map

import { Almanac } from "../classes/Almanac";

// Each line within a map contains three numbers: the destination range start, the source range start, and the range length.

// seed-to-soil map:

// soil-to-fertilizer map:

// fertilizer-to-water map:

// water-to-light map:

// light-to-temperature map:

// temperature-to-humidity map:

// humidity-to-location map:

export function almanacParser(input: string): Almanac {
  const lines = input.split("\n");
  const seeds = lines[0]
    .replace("seeds: ", "")
    .split(" ")
    .map((seedStr) => parseInt(seedStr));

  // seed-to-soil map:
  // 50 98 2
  // 52 50 48
  //
  // [soil seed range]

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

function parseMap(mapId: string, lines: string[]) {
  const rangesIndex = lines.findIndex((line) => line.includes(mapId));
  let nextLine = lines[rangesIndex + 1];
  let i = 0;
  const map = {};
  while (nextLine && nextLine.trim() !== "") {
    let [destination, source, range] = nextLine
      .split(" ")
      .map((n) => parseInt(n));
    for (let i = 0; i < range; i++) {
      map[source + i] = destination + i;
    }
    i++;
    nextLine = lines[rangesIndex + 1 + i];
  }
  return map;
}
