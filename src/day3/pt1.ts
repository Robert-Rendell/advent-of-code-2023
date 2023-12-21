import { readFile } from "../utils/read-file";

type PartNumber = {
  cells: EngineSchematicCell[];
  value: number;
};
type EngineSchematicCell = {
  x: number;
  y: number;
};
class EngineSchematic extends Array<Array<string>> {
  constructor(input: string) {
    super(...EngineSchematic.parseEngineSchematic(input));
  }
  private static parseEngineSchematic(input: string): string[][] {
    const engineSchematic: string[][] = [];
    input.split("\n").forEach((each) => {
      const row: string[] = [];
      for (let i = 0; i < each.length; i++) {
        row.push(each[i]);
      }
      engineSchematic.push(row);
    });
    return engineSchematic;
  }

  public neighbours(args: { x: number; y: number }): string[] {
    return [];
  }

  public getPartNumbers(): PartNumber[] {
    const partNumbers = [];
    this.forEach((each, i) => {
      each.forEach((numberSymbolOrDot, j) => {});
    });
    return [
      {
        value: 0,
        cells: [],
      },
    ];
  }
}

export async function part1(opts?: { input: string }) {
  let input: string = "";
  if (!opts?.input) {
    input = await readFile("src/day3/puzzles/d3-puzzle.txt");
  } else {
    input = opts.input;
  }

  const engineSchematic = new EngineSchematic(input);

  const partNumbers = engineSchematic.getPartNumbers();

  return partNumbers.map((pn) => pn.value).reduce((p, c) => p + c);
}
