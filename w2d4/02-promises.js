// Promises!
// Different from callbacks, syntactically simpler

// A promise is asynchronous
// Contract that will be solved in the future

// States of a promise
// Pending / Resolved
// Resolved: Good resolved, rejected

// Date, Error, Object, Array, Promise

// const somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve("YAY!");
//     } else {
//       reject("NAY!");
//     }
//   }, 2000);
// });

// Promise blueprint:
// .then method => Will execute the callback inside the .then() method if resolve is called
// .catch method => Will execute the callback inside the .catch() method if reject is called
// .finally method => Will always execute even if it's a reject/resolve

// somePromise
//   .then((message) => console.log("YAY", message))
//   .catch((errorMessage) => console.log("OH NO :(", errorMessage))
//   .finally(() => console.log("That's all folks!"));

const setTimeoutButPromise = (timeInMs) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeInMs);
  });
};

setTimeoutButPromise(2000)
  .then(() => console.log("Waited for two seconds!"))
  .then(() => console.log("Mwahahaha"))
  .then(() => console.log("Mwahahaha"))
  .then(() => setTimeoutButPromise(1000))
  .then(() => console.log("Waited for 1 sec"))
  .then(() => console.log("Mwahahaha"))
  .then(() => console.log("Mwahahaha"));
