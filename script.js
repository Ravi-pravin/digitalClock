// Button used to toggle dark/light mode
const toggleBtn = document.getElementById("toggleMode");

// Clock elements (hours, minutes, seconds, date, AM/PM)
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const dateEl = document.getElementById("date");
const ampmEl = document.getElementById("ampm");

// Function to update the digital clock every second
function updateClock() {
  const now = new Date(); // Get current date and time

  let h = now.getHours();   // Get hours (24-hour format)
  let m = now.getMinutes(); // Get minutes
  let s = now.getSeconds(); // Get seconds

  // Decide AM or PM based on hour
  const ampm = h >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  h = h % 12 || 12;

  // Display values with 2-digit formatting
  hoursEl.innerText = String(h).padStart(2, "0");
  minutesEl.innerText = String(m).padStart(2, "0");
  secondsEl.innerText = String(s).padStart(2, "0");
  ampmEl.innerText = ampm;

  // Display current date
  dateEl.innerText = now.toDateString();
}

// Run clock every 1 second
setInterval(updateClock, 1000);
updateClock(); // Initial call to avoid delay on load

// Toggle dark mode on button click
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Change icon between moon and sun
  const icon = toggleBtn.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});