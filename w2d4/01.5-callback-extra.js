// Grind Coffee

const grindCoffee = (amountInGrams, doNextStep) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      doNextStep(false, `Great success! Ground ${amountInGrams}g of coffee`);
    } else {
      doNextStep(true, `OH NO! Wasted ${amountInGrams}g of coffee`);
    }
  }, 1000);
};

grindCoffee(18.5, (err, message) => console.log(message));

const combineAndWait = (waitTimeInS, successCallback, failCallback) => {
  const waitTime = waitTimeInS * 1000;

  setTimeout(() => {
    if (Math.random() > 0.5) {
      successCallback(`Great success! It smells good!`);
    } else {
      failCallback(
        `OH NO! I tipped it over, there's hot water coffee everwhee AHHHHHHHH`
      );
    }
  }, waitTime);
};

combineAndWait(
  5,
  (message) => {
    console.log(message);
    grindCoffee(18.5, (err, message) => console.log(message));
  },
  console.log
);
