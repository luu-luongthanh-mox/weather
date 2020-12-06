const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const useGetDayName = (dateString: string) => {
  const d = new Date(dateString);
  const dayName = days[d.getDay()];
  return dayName || "";
};
