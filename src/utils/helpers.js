import mondaySdk from "monday-sdk-js";

const monday = mondaySdk();

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

export function sortPeople(departments, people) {
  const filteredDepartments = departments.filter(
    (dep) => dep !== "All" && dep !== "all"
  );
  const departmentsOrderMap = new Map();
  filteredDepartments.forEach((department, i) =>
    departmentsOrderMap.set(department, i)
  );
  const sortedPeople = people.sort((a, b) => {
    const aOrder = departmentsOrderMap.get(a.team);
    const bOrder = departmentsOrderMap.get(b.team);

    if (aOrder === undefined && bOrder === undefined) return 0;
    if (aOrder === undefined) return 1;
    if (bOrder === undefined) return -1;

    return aOrder - bOrder;
  });
  return sortedPeople;
}
export function isWeekdays(days) {
  const weekdays = [1, 2, 3, 4, 5];
  return (
    days.length === weekdays.length &&
    days.every((day, i) => day === weekdays[i])
  );
}

export async function getSessionToken() {
  try {
    const token = await monday.get("sessionToken");
    if (token.errorMessage === undefined) {
      return token.data;
    } else if (token.errorMessage) {
      return token.errorMessage;
    }
    return token.data;
  } catch (error) {
    console.error(error);
    return "Error fetching session token";
  }
}
