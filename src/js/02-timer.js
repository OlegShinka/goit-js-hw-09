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
const date = new Date();
let resFoo;
function onInputTime(evt) {
  evt.preventDefault();
}

function onStartTimer() {
  setInterval(() => {
    addLeadingZero(resConvert);
  }, 1000);
}

function addLeadingZero(val) {
  refs.daysEl.textContent = resConvert.days.toString().padStart(2, '0');
  refs.hoursEl.textContent = resConvert.hours.toString().padStart(2, '0');
  refs.minutesEl.textContent = resConvert.minutes.toString().padStart(2, '0');
  refs.secondsEl.textContent = resConvert.seconds.toString().padStart(2, '0');
}

const fp = flatpickr(refs.inputEl, {
  altInput: true,
  altFormat: 'F j, Y',
  dateFormat: 'Y-m-d',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const timerId = setInterval(() => {
      const realTime = Date.now();
      const selectedTime = selectedDates[0].getTime();
      const remainTime = Math.floor(selectedTime - realTime);

      resConvert = convertMs(remainTime);

      if (remainTime <= 0) {
        clearInterval(timerId);
        return;
      }
    }, 1000);

    if (selectedDates[0] < date) {
      refs.startEl.setAttribute('disabled', true);
      alert('Please choose a date in the future');
    } else {
      refs.startEl.removeAttribute('disabled', true);
    }
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
