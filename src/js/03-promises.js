// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const fulfil = Math.random() > 0.4;
    if (fulfil) {
      resolve('Succesful');
    }
    reject('Errorr');
  }, 2000);
});

promise
  .then(result => {
    console.log('Winner JS');
    console.log(`${Succesful}`);
  })
  .catch(result => {
    console.log('NOT Winner JS');
    // console.log(`${Errorr}`);
  });
console.log(promise);
