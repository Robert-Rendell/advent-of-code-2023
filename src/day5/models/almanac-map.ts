/**
 * Each line within a map contains three numbers: the destination range start, the source range start, and the range length.
 * eg.
 * ```
 *    seed-to-soil map:
 *    50 98 2
 * ```
 * ```
 *    seed-to-soil map:
 *    SOIL (50) SEED (98) RANGE (2)
 * ```
 */
export type AlmanacRange = {
  destination: number;
  source: number;
  range: number;
};
export type AlmanacMap = {
  ranges: AlmanacRange[];
};
