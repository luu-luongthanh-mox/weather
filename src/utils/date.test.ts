import moment from "moment-timezone";

import { isEqualDate } from "./date";

describe("hooks: useGetDayName", () => {
  it("should return true", () => {
    const date = moment();
    const compareDate = moment();
    const output = true;
    expect(isEqualDate(date, compareDate)).toEqual(output);
  });

  it("should return false", () => {
    const date = moment("2020-1-1");
    const compareDate = moment();
    const output = false;
    expect(isEqualDate(date, compareDate)).toEqual(output);
  });
});
