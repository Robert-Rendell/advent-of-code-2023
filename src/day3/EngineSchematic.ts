import { getEntries } from "../types/entries";
import { PartNumber } from "./PartNumber";
import { Cell } from "./types/cell";
import { Coord } from "./types/coord";
import { EngineSchematicCell } from "./types/engine-schematic-cell";
import { Gear } from "./types/gear";

export class EngineSchematic extends Array<Array<string>> {
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

  private addNeighbourIfValid(neighbour: Coord, n: Coord[]) {
    if (
      typeof this[neighbour[0]] !== "undefined" &&
      typeof this[neighbour[0]][neighbour[1]] !== "undefined"
    ) {
      n.push(neighbour);
    }
  }

  public neighbours(cell: Cell): Coord[] {
    const n: Coord[] = [];

    const potentialNeighbours: Coord[] = [
      [cell.x + 1, cell.y - 1],
      [cell.x - 1, cell.y - 1],
      [cell.x, cell.y - 1],
      [cell.x + 1, cell.y + 1],
      [cell.x - 1, cell.y + 1],
      [cell.x, cell.y + 1],
      [cell.x + 1, cell.y],
      [cell.x - 1, cell.y],
    ];

    potentialNeighbours.forEach((each) => {
      this.addNeighbourIfValid(each, n);
    });

    return n;
  }

  public neighbouringCells(cell: Cell) {
    const ns = this.neighbours(cell);
    return ns.map((coord) => {
      const esc: EngineSchematicCell = {
        x: coord[0],
        y: coord[1],
        value: this[coord[0]][coord[1]],
      };
      return esc;
    });
  }

  private isSymbolOrDot(value: string) {
    return isNaN(parseInt(value));
  }

  private isSymbol(value: string) {
    return this.isSymbolOrDot(value) && value !== ".";
  }

  private isAsterisk(value: string) {
    return value === "*";
  }

  private getPotentialPartNumbers(): PartNumber[] {
    const potentialPartNumbers: PartNumber[] = [];
    this.forEach((each, x) => {
      let currentPartNumber = new PartNumber();
      each.forEach((numberSymbolOrDot, y) => {
        const isSymbolOrDot = this.isSymbolOrDot(numberSymbolOrDot);
        if (isSymbolOrDot) {
          if (currentPartNumber.value) {
            potentialPartNumbers.push(currentPartNumber);
            currentPartNumber = new PartNumber();
          }
        } else {
          currentPartNumber.cells.push({
            x,
            y,
            value: numberSymbolOrDot,
          });
        }
      });
      // Not a part number across two lines
      if (currentPartNumber.value) {
        potentialPartNumbers.push(currentPartNumber);
      }
      currentPartNumber = new PartNumber();
    });
    return potentialPartNumbers;
  }

  public getPartNumbers(): PartNumber[] {
    const ppns = this.getPotentialPartNumbers();
    return ppns.filter((ppn) => {
      let isPartNumber = false;

      isPartNumber = ppn.cells.some((cell) => {
        const ns = this.neighbouringCells(cell);
        return ns.some((n) => {
          const isSymbol = this.isSymbol(n.value);
          if (isSymbol && this.isAsterisk(n.value)) {
            ppn.asteriskCoord = {
              x: n.x,
              y: n.y,
            };
          }
          return isSymbol;
        });
      });

      return isPartNumber;
    });
  }

  public getGears(): Gear[] {
    const pns = this.getPartNumbers();

    const asteriskCoords = pns.map((pn) => pn.asteriskCoord);
    const asteriskFrequencyTable: Record<string, number> = {};

    asteriskCoords.forEach((ac) => {
      asteriskFrequencyTable[JSON.stringify(ac)] = 0;
      pns.forEach((pn) => {
        const asteriskCoord = JSON.stringify(pn.asteriskCoord);
        asteriskFrequencyTable[asteriskCoord] =
          asteriskFrequencyTable[asteriskCoord] + 1;
      });
    });

    const gears = getEntries(asteriskFrequencyTable).filter(
      ([k, v]) => v === 2,
    );

    console.log(gears);
    return [];
  }

  public getGearRatios(gears: Gear[]): number[] {
    return [];
  }
}
