import { isToday } from "./date";

describe("hooks: useGetDayName", () => {
  it("should return true", () => {
    const input = new Date();
    const output = true;
    expect(isToday(input)).toEqual(output);
  });

  it("should return false", () => {
    const input = new Date("2020-1-1");
    const output = false;
    expect(isToday(input)).toEqual(output);
  });
});
