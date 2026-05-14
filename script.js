const toggleBtn = document.getElementById("toggleMode");

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const dateEl = document.getElementById("date");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  const now = new Date();

  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let ampm = h >= 12 ? "PM" : "AM";

  h = h % 12 || 12;

  hoursEl.innerText = String(h).padStart(2, "0");
  minutesEl.innerText = String(m).padStart(2, "0");
  secondsEl.innerText = String(s).padStart(2, "0");
  ampmEl.innerText = ampm;

  dateEl.innerText = now.toDateString();
}

setInterval(updateClock, 1000);
updateClock();

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const icon = toggleBtn.querySelector("i");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});