import { PartNumber } from "../PartNumber";
import { Cell } from "./cell";

export type Gear = {
  a: PartNumber;
  b: PartNumber;
  coord: Cell;
};
