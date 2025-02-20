// Why do we want functions?

// Better code organization
// Code reusability
// Easier to mesh code together (legibility)

const listOfNames = ["Vikki", "Alejandra", "Jumpei"];
const anotherListOfNames = ["Chicken", "Poulet", "Pollo"];

const sayGoodMorning = () => {
  const listOfNames = ["Vikki", "Alejandra", "Jumpei"];

  for (const name of listOfNames) {
    console.log(`Good morning ${name}!`);
  }
};

// sayGoodMorning();

const sayGoodMorningButBetter = (listOfNames) => {
  for (const name of listOfNames) {
    console.log(`Good morning ${name}!`);
  }
};


// sayGoodMorningButBetter(listOfNames);
// sayGoodMorningButBetter(anotherListOfNames);

const saySomething = (listOfNames, message) => {
  for (const name of listOfNames) {
    console.log(`${message} ${name}!`);
  }
}

saySomething(listOfNames, "Sorry for all the snow")

const saySomethingButBetterQuestionMark = (listOfNames, messageBefore, messageAfter) => {
  for (const name of listOfNames) {
    console.log(`${messageBefore} ${name} ${messageAfter}`);
  }
}

saySomethingButBetterQuestionMark(listOfNames, "Sorry for all the snow", ", have fun shoveling!")