const dayInput = document.getElementById('dayInput');
const startBtn = document.getElementById('startBtn');
const titleEl = document.getElementById('title');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const targetTextEl = document.getElementById('targetText');

let countdownEndTime = null;

function safeNumber(value, fallback) {
  const num = Number(value);
  return Number.isFinite(num) ? num : fallback;
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'medium'
  }).format(date);
}

function updateCountdown() {
  const remainingMs = Math.max(0, countdownEndTime - Date.now());
  const totalSeconds = Math.floor(remainingMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');

  if (remainingMs <= 0) {
    titleEl.textContent = 'Timer Finished';
    targetTextEl.textContent = 'The countdown has ended.';
  }
}

function startCountdown(days) {
  const validDays = Math.max(1, Math.floor(safeNumber(days, 12)));
  const durationMs = validDays * 24 * 60 * 60 * 1000;
  countdownEndTime = Date.now() + durationMs;

  titleEl.textContent = `${validDays}-Day Timer`;
  targetTextEl.textContent = `Countdown ends at: ${formatDate(new Date(countdownEndTime))}`;
  updateCountdown();
}

startBtn.addEventListener('click', () => {
  startCountdown(dayInput.value);
});

dayInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    startCountdown(dayInput.value);
  }
});

const params = new URLSearchParams(window.location.search);
const queryDays = safeNumber(params.get('days'), 12);
const initialDays = queryDays > 0 ? queryDays : 12;

dayInput.value = String(initialDays);
startCountdown(initialDays);
setInterval(updateCountdown, 1000);
