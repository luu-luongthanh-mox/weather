import { useWeatherIcon } from "./useWeatherIcon";

describe("hooks: useGetDayName", () => {
  it("should return c icon", () => {
    const input = "c";
    const output = "/weather/c.svg";
    expect(useWeatherIcon(input)).toEqual(output);
  });
});
