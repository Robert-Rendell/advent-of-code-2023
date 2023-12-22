import { Cell } from "./types/cell";
import { EngineSchematicCell } from "./types/engine-schematic-cell";

export class PartNumber {
  public cells: EngineSchematicCell[];

  public asteriskCoord: Cell | undefined;

  constructor() {
    this.cells = [];
  }

  get value() {
    return this.cells.map((c) => c.value).join("");
  }
  public numberValue() {
    return parseInt(this.value);
  }
}
