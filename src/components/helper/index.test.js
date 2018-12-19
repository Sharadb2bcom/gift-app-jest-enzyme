import { max_number } from "./index";

describe("max number", () => {
  it("given an empty array", () => {
    expect(max_number([])).toEqual(0);
  });
  it("given array is not empty", () => {
    expect(max_number([1, 2, 3])).toEqual(3);
  });
});
