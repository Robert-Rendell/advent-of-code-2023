import { CamelCardsHand } from "../classes/CamelCardsHand";

export function camelCardsParser(input: string): CamelCardsHand[] {
  const lines = input.split("\n");
  return lines.map((line) => {
    const [hand, bid] = line.split(" ");
    return new CamelCardsHand({ hand, bid: parseInt(bid) });
  });
}
