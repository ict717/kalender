// Get the current date and time
const currentDate = new Date();

// Get the current month and year
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

// Function to create the calendar
function createCalendar(month, year) {
  const calendarDates = document.querySelector('.calendar-dates');
  const calendarCurrentDate = document.querySelector('.calendar-current-date');

  // Clear the calendar dates
  calendarDates.innerHTML = '';

  // Create the calendar dates
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  const daysInMonth = endDate.getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    const dayOfWeek = date.getDay();
    const dayOfMonth = date.getDate();

    const li = document.createElement('li');
    li.textContent = dayOfMonth;
    li.className = dayOfWeek === 0 || dayOfWeek === 6 ? 'weekend' : '';

    calendarDates.appendChild(li);
  }

  // Update the current date
  calendarCurrentDate.textContent = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
}

// Create the calendar for the current month and year
createCalendar(currentMonth, currentYear);

// Add event listeners to the navigation buttons
document.getElementById('calendar-prev').addEventListener('click', function() {
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  if (currentMonth === 0) {
    currentDate.setFullYear(currentYear - 1);
    currentDate.setMonth(11);
  } else {
    currentDate.setMonth(currentMonth - 1);
  }

  createCalendar(currentDate.getMonth(), currentDate.getFullYear());
});

document.getElementById('calendar-next').addEventListener('click'), function() {
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
}

  if (currentMonth === 11) {
    currentDate.setFullYear(currentYear + 1);
    currentDate.setMonth(0);
  }