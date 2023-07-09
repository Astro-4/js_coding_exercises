import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("return the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 2, 3, 4, 5])).toBe(8);
    expect(sumMultiples([2, 4, 6, 8])).toBe(6);
    expect(sumMultiples([1, 7, 11, 13])).toBe(0);
  });

  test("returns zero if given an empty array", () => {
    expect(sumMultiples([])).toBe(0);
  });
});
//Done
describe("isValidDNA", () => {
  test.only("receive a string of characters and should return true/false depending on whether it is a valid DNA string.", () => {
    expect(isValidDNA("CACACA")).toBe(true);
    expect(isValidDNA("AAAAAGT")).toBe(true);
    expect(isValidDNA("GTAGTB")).toBe(false);
  });
  test.only("should not be case sensitive.", () => {
    expect(isValidDNA("gta")).toBe(true);
  });
});
