import { useGetDayName } from "./useGetDayName";

describe("hooks: useGetDayName", () => {
  it("should return ''", () => {
    const input = "";
    const output = "";
    expect(useGetDayName(input)).toEqual(output);
  });

  it("should return Sat", () => {
    const input = "2020-12-12";
    const output = "Sat";
    expect(useGetDayName(input)).toEqual(output);
  });
});
