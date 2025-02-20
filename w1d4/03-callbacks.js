// Functions
// Referencing
// Calling

// Referencing
// Structural type (array, object, derivatives)

const listOfNames = ["Vikki", "Alejandra", "Jumpei"];

// Drill bits!
const sayGoodMorning = (name) => console.log(`Good morning ${name}!`)
const sayGoodEvening = (name) => console.log(`Good evening ${name}!`)


sayGoodMorning(listOfNames[0])
sayGoodMorning(listOfNames[1])
sayGoodMorning(listOfNames[2])

// Drill
const accessEveryName = (listOfNames, action) => {
  for(const name of listOfNames){
    // Access to name here!
    action(name)
  }
}

accessEveryName(["Josn","Bob"], sayGoodEvening)
accessEveryName(["Josn","Bob"], sayGoodMorning)

// I take in
// num1: should be a number
// num2: should be a number
// action: should be a function, that will return a number

// Higher Order Functions (HOFs)
// A function that takes in another function as a parameter
const doSomethingToTwoNumbers = (num1, num2, action) => {
  const result = action(num1) + action(num2)
  console.log(result)
}

// doubleUp and squareUp are not special functions
// Normal function expressions
const doubleUp = (number) => number * 2
const squareUp = number => Math.pow(number, 2)


// When we call a higher order function with another function as one of the parameters
// That function is THE callback of the HOF

doSomethingToTwoNumbers(5,6, doubleUp)
// doubleUp is THE callback of doSomethingWithTwoNumbers
// Callback === relationship status

doSomethingToTwoNumbers(5,6, squareUp)
// squareUp is THE callback of doSomethingWithTwoNumbers
// Callback === relationship status

doSomethingToTwoNumbers(5,6, undefined)
