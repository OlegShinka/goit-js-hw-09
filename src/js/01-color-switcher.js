function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyMain = document.querySelector('body');
const spanEl = document.querySelector('.color');
const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
let timerId = null;
btnStartEl.addEventListener('click', onBtnStart);
btnStopEl.addEventListener('click', onBtnStop);
function onBtnStart(evt) {
  btnStartEl.setAttribute('disabled', 'true');
  btnStopEl.removeAttribute('disabled', 'true');
  timerId = setInterval(() => {
    bodyMain.style.backgroundColor = getRandomHexColor();
    spanEl.textContent = getRandomHexColor();
  }, 1000);
}
function onBtnStop(evt) {
  btnStartEl.removeAttribute('disabled', 'true');
  btnStopEl.setAttribute('disabled', 'true');
  clearInterval(timerId);
}
