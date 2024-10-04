export function changeTheme(theme) {
  if (theme === "dark") {
    document.querySelector("body").setAttribute("data-theme", "dark");
    return "dark";
  } else if (theme === "black") {
    document.querySelector("body").setAttribute("data-theme", "black");
    return "black";
  } else if (theme === "light" || !theme) {
    document.querySelector("body").setAttribute("data-theme", "light");
    return "light";
  }
}

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

export const safeParse = (data) => {
  try {
    if (typeof data === "string") {
      const parsedData = JSON.parse(data);
      return parsedData;
    }
  } catch (error) {
    return data;
  }
  return data;
};

export const formatRatecards = (ratecards, userId) => {
  return ratecards.map((ratecard) =>
    Object.entries(ratecard).reduce(
      (acc, [key, value]) => {
        console.log({ key });
        if (value && typeof value === "object" && "value" in value) {
          if (key === "startTime" || key === "endTime") {
            acc[key] = parseFloat(value.value);
          } else {
            acc[key] = value.value;
          }
        } else if (key === "rate") {
          acc[key] = parseFloat(value);
        } else {
          acc[key] = value;
        }
        return acc;
      },
      { updatedBy: userId }
    )
  );
};
