import { EngineSchematicCell } from "./types/engine-schematic-cell";

export class PartNumber {
  cells: EngineSchematicCell[];

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
