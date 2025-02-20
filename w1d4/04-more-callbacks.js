const forEachElement = (list, doSomething) => {
  for(let i = 0; i < list.length; i++){
    const element = list[i]
    doSomething(element, i, list)
  }
}


const listOfNames = ["Vikki", "Alejandra", "Jumpei"];
const yellAName = (name) => console.log(name.toUpperCase())

forEachElement(listOfNames, yellAName)


const outputIfOddOrNot = (number, index) => {
  if(number % 2 === 0){
    console.log(`The number ${number} at position ${index} is even`)
  } else {
    console.log(`The number ${number} at position ${index} is odd`)
  }
}
forEachElement([1,2,23,34,5,6,6,32], outputIfOddOrNot)


// Normal function
// Problem: It takes two params, the only useful one in forEach.. is the first one (the element)
const outputToThePowerOfSomething = (number, power) => console.log(Math.pow(number, power)) 

// Solution:
// We create an 'adapter' function that will match the parameters that we're given
const outputToThePowerOfFive = (number) => outputToThePowerOfSomething(number, 5)

forEachElement([1,2,23,34,5,6,6,32], outputToThePowerOfFive)
forEachElement([1,2,23,34,5,6,6,32], (number) => outputToThePowerOfSomething(number, 5))

