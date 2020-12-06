import { renderHook } from "@testing-library/react-hooks";
import { useDisplayTemp } from "./useDisplayTemp";

describe("hooks: useDisplayTemp", () => {
  test("should show temp", () => {
    const { result } = renderHook(() => useDisplayTemp(20));
    expect(result.current).toBe("20°");
  });
});
