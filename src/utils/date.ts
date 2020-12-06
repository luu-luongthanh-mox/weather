export const isEqualDate = (
  date: moment.Moment,
  compareDate: moment.Moment
) => {
  // const today = new Date();
  return (
    date.date() === compareDate.date() &&
    date.month() === compareDate.month() &&
    date.year() === compareDate.year()
  );
};
