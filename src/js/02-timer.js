import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  timerEl: document.querySelector('.timer'),
  inputEl: document.querySelector('#datetime-picker'),
  startEl: document.querySelector('button[data-start]'),
  daysEl: document.querySelector('span[data-days'),
  hoursEl: document.querySelector('span[data-hours'),
  minutesEl: document.querySelector('span[data-minutes'),
  secondsEl: document.querySelector('span[data-seconds'),
};
refs.timerEl.style.display = 'flex';
refs.timerEl.style.justifyContent = 'space-around';

refs.inputEl.addEventListener('input', onInputTime);
refs.startEl.addEventListener('click', onStartTimer);
refs.startEl.setAttribute('disabled', true);

let resConvert;
let selectData;
let idTimer;
let remainTime;

function onInputTime(evt) {
  evt.preventDefault();
}
function onStartTimer() {
  idTimer = setInterval(() => {
    remainTime = selectData - new Date().getTime();
    resConvert = convertMs(remainTime);

    if (remainTime > 0) {
      addLeadingZero();
    } else {
      clearInterval(idTimer);
    }
  }, 1000);
}

function addLeadingZero() {
  refs.daysEl.textContent = resConvert.days.toString().padStart(2, '0');
  refs.hoursEl.textContent = resConvert.hours.toString().padStart(2, '0');
  refs.minutesEl.textContent = resConvert.minutes.toString().padStart(2, '0');
  refs.secondsEl.textContent = resConvert.seconds.toString().padStart(2, '0');
}

const fp = flatpickr(refs.inputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      refs.startEl.setAttribute('disabled', true);
      alert('Please choose a date in the future');
      return;
    } else {
      refs.startEl.removeAttribute('disabled', true);
    }
    //тут у нас отримані мілісекунди з input при виборі дати перед. в глобальну змінну
    selectData = selectedDates[0].getTime();
  },
});
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
