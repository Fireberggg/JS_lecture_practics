// TASK 5 : Promises

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("a");
  }, 1000);
});

myPromise
  .then(
    item =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(item + "b");
        }, 1000);
      })
  )
  .then(result => {
    throw new Error(result);
  })
  .then(null, err => {
    throw new Error(err);
  })
  .catch(error => {
    console.log("-----HERE BEGINS THE TASK 5-----");
    console.error(error);
  })
  .finally(() => console.log("ab"));
