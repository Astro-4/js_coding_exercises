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
  test("receive a string of characters and should return true/false depending on whether it is a valid DNA string.", () => {
    expect(isValidDNA("CACACA")).toBe(true);
    expect(isValidDNA("AAAAAGT")).toBe(true);
    expect(isValidDNA("GTAGTB")).toBe(false);
  });
  test("should not be case sensitive.", () => {
    expect(isValidDNA("gta")).toBe(true);
  });
});
//Done
describe("getComplementaryDNA", () => {
  test("receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G.", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("CACACA")).toBe("GTGTGT");
  });
  test("should not be case sensitive.", () => {
    expect(getComplementaryDNA("gtac")).toBe("CATG");
  });
});
//Done
describe("isItPrime", () => {
  test("receive a number and return true/false depending on whether it is a prime number or not.", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(8)).toBe(false);
    expect(isItPrime(0)).toBe(false);
  });
});
//Done
describe("createMatrix", () => {
  test("receive a number and return an array of n arrays, each filled with n items. The parameter fill should be used as the filler of the arrays.", () => {
    expect(createMatrix(3, "fart")).toEqual([
      ["fart", "fart", "fart"],
      ["fart", "fart", "fart"],
      ["fart", "fart", "fart"],
    ]);
    expect(createMatrix(2, 5)).toEqual([
      [5, 5],
      [5, 5],
    ]);
    expect(createMatrix(-1, "Dog")).toEqual([]);
  });
});
//Done
describe("areWeCovered", () => {
  test("return true/false depending on whether there are enough staff scheduled for the given day from an array of staff objects.", () => {
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "Emily",
            rota: ["Monday", "Tuesday", "Thursday", "Saturday"],
          },
        ],
        "Wednesday"
      )
    ).toBe(false);
    expect(
      areWeCovered(
        [
          { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
          {
            name: "Pedro",
            rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"],
          },
          {
            name: "Emily",
            rota: ["Monday", "Tuesday", "Thursday", "Saturday"],
          },
        ],
        "Tuesday"
      )
    ).toBe(true);
  });
});
//Done
