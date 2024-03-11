export const getDateRange = (start: string, end: string) => {
  for (
    var arr: Date[] = [], dt = new Date(start);
    dt <= new Date(end);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt));
  }
  return arr;
};

// Function to set the time to the end of the day
export const setToEndOfDay = (date: Date) => {
  date.setHours(23, 59, 59, 999);
  return date;
};

// Function to set the time to the start of the day
export const setToStartOfDay = (date: Date) => {
  date.setHours(0, 0, 0, 0);
  return date;
};
