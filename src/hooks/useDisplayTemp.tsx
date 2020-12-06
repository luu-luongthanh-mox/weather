import React from "react";

export const useDisplayTemp = (temp: number) => {
  return temp.toFixed(0) + "°";
};
