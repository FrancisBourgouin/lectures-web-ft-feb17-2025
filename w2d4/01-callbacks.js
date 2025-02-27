// COFFEEE!

// Boil Water

const boilWater = (amountInml, doNextStep) => {
  setTimeout(() => {
    if (Math.random() > 0.2) {
      doNextStep(false, `Great success! Boiled ${amountInml}ml of water`);
    } else {
      doNextStep(true, `OH NO! BOILING WATER EVERYWHERE AHHHH!`);
    }
  }, 1000);
};

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

// Put the coffee & boiling water in the press
// Wait 5 mins

const combineAndWait = (waitTimeInS, successCallback, failCallback) => {
  const waitTime = waitTimeInS * 1000;

  setTimeout(() => {
    if (Math.random() > 0.5) {
      successCallback(`Great success! It smells good!`);
    } else {
      failCallback(`OH NO! I tipped it over, there's hot water coffee everwhee AHHHHHHHH`);
    }
  }, waitTime);
};

// Press the plunger
// Enjoy!

const pressPlungerAndEnjoy = () => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      console.log(`Great success! BEST CUP OF COFFEE EVERRR`);
    } else {
      console.log(`OH NO! I BROKE MY FAVORITE MY MORNING IS RUINED`);
    }
  }, 2000);
}



// Action!
boilWater(500, (error, message) => {
  if (error) {
    return console.log(message);
  }

  console.log(message);
  grindCoffee(18.5, (error, message) => {
    if (error) {
      return console.log(message);
    }

    console.log(message);
    combineAndWait(2);
  });
});

