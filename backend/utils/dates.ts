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

export const convertToFormat = (date: Date) => {
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

// Function to set the time to the end of the day
export const setToEndOfDay = (date: Date) => {
  date.setHours(23, 59, 59, 999);
  return convertToFormat(date);
};

// Function to set the time to the start of the day
export const setToStartOfDay = (date: Date) => {
  date.setHours(0, 0, 0, 0);
  return convertToFormat(date);
};
