const getNextMonthDate = (today) => {
  // Get the current month and year
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  // Calculate the next month
  let nextMonth = (currentMonth + 3) % 12;
  let nextYear = currentYear + Math.floor((currentMonth + 1) / 12);

  // Create a new date object for the next month
  const nextMonthDate = new Date(nextYear, nextMonth, 1);
  return nextMonthDate;
};

const useCourseDates = () => {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let nextMonthDate = getNextMonthDate(today);
  const formattedStartDate = today.toLocaleDateString("en-US", options);
  const formattedEndDate = nextMonthDate.toLocaleDateString("en-US", options);
  const courseDates = {
    formattedStartDate,
    formattedEndDate,
  };
  return courseDates;
};

export default useCourseDates;
