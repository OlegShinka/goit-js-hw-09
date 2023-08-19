import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
};
refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const delaySelected = refs.formEl.delay.value;
  const amountSelected = refs.formEl.amount.value;
  const stepSelected = refs.formEl.step.value;

  for (let i = 1; i <= amountSelected; i += 1) {
    createPromise(i, Number(delaySelected) + (i - 1) * Number(stepSelected));
  }
}
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.warning(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
