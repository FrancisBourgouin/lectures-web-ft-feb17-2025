// Existential Questions

// Callback ?

// HOF => Higher Order Function
// 1- Needs to call a function as a parameter
// 2- A function that returns a function definition

// When are we supposed to use it?
// Callback => When we want to use a HOF

const someArray = [1, 2, 3, 4];

const checkIfBiggerThanTwo = (num) => num > 2;

someArray.filter((num) => num > 2); // [3,4]
someArray.filter(checkIfBiggerThanTwo);

const answerToTheExistentialQuestion = () => {
  const answer = "42!";
  console.log(answer);

  // OR

  console.log("42!")
};

// HOF => Build one when the operations are done often!

const beautifyOutput = (outputAction) => {
  console.log("🐔🥔🐔🥔🐔🥔🐔🥔🐔🥔🐔🥔")
  outputAction()
  console.log("🐔🥔🐔🥔🐔🥔🐔🥔🐔🥔🐔🥔")
}

beautifyOutput(() => console.log("Yeah!"))

beautifyOutput(answerToTheExistentialQuestion)



// Synchronous (At the same time, step1 then step 2 ...)
// Asynchronous (Set something up, wait, then receive an update)
