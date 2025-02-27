const boilWater = (amountInml) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(`Great success! Boiled ${amountInml}ml of water`);
      } else {
        reject(`OH NO! BOILING WATER EVERYWHERE AHHHH!`);
      }
    }, 1000);
  });
};

const grindCoffee = (amountInGrams) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`Great success! Ground ${amountInGrams}g of coffee`);
      } else {
        reject(`OH NO! Wasted ${amountInGrams}g of coffee`);
      }
    }, 1000);
  });
};

const combineAndWait = (waitTimeInS) => {
  const waitTime = waitTimeInS * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`Great success! It smells good!`);
      } else {
        reject(`OH NO! I tipped it over, there's hot water coffee everwhee AHHHHHHHH`);
      }
    }, waitTime);
  });
};

const pressPlungerAndEnjoy = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`Great success! BEST CUP OF COFFEE EVERRR`);
      } else {
        reject(`OH NO! I BROKE MY FAVORITE MY MORNING IS RUINED`);
      }
    }, 2000);
  });
};

const report = (message) => console.log(message);

const grindStandardCoffeeDose = () => grindCoffee(18.5);

const combineAndWaitForTwoSecs = () => combineAndWait(2);

const boil500MlOfWater = () => boilWater(500);

// boilWater(500)
//   .then(report)
//   .then(grindStandardCoffeeDose)
//   .then(report)
//   .then(combineAndWaitForTwoSecs)
//   .then(report)
//   .then(pressPlungerAndEnjoy)
//   .then(report)
//   .catch((err) => console.log(err));

Promise.all([boil500MlOfWater(), grindStandardCoffeeDose()])
  .then(report)
  .then(combineAndWaitForTwoSecs)
  .then(report)
  .then(pressPlungerAndEnjoy)
  .then(report)
  .catch((err) => console.log(err));
