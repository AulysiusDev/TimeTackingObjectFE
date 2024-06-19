export function createDatesArray(startDate, endDate) {
  const datesArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    datesArray.push(formatDate(new Date(currentDate)).slice(0, -2).trim());
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return datesArray;
}

export function formatDate(date) {
  const options = { day: "2-digit", month: "short", year: "2-digit" };
  return date.toLocaleDateString("en-GB", options).replace(",", "");
}
