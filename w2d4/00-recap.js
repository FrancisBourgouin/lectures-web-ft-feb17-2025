// Existential questions

// Synchronous code

// Read from top to bottom
// Locks the user

// Asynchronous code

// WebWorker
// Event Driven
// Scoped instead of top to bottom


// Errors!
const someNumber = 5
try{
  
  throw new Error("NYAAAAHHH!")
  someNumber = 10 // Errors! Exceptions
  // JS: (╯°□°）╯︵ ┻━┻
  // THROWING AN ERROR / EXCEPTION

} catch(err){
  console.log("OH NO.", err)
}


console.log("YEAH!")

const someObj = {}

someObj.name.firstName

// expect(...).toThrow()