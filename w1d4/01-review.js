// Existential questions!

// Function definition, hoisting

function someFunctionDefinition() {
  console.log("Hello!");
}

someFunctionDefinition(); // Will still show bye!

function someFunctionDefinition() {
  console.log("Bye!");
}

// Function expression

const someFunctionExpression = function () {
  console.log("I'm a function expression! ");
};

// Arrow function expression

const someArrowFunctionExpression = () => {
  console.log("I'm an arrow function!");
};

const addTwoNumbers = (num1, num2) => num1 + num2; // Implicitely returns!

// IIFE
// Immediatly invoked function expression

(function () {
  const someVar = "Bob!";

  console.log("Secret!");
})();

const someVar = "Bobby!";
console.log("Secret!");

// Functions, Arrays, Objects and you!

const someArray = [1, 2, 3, 4]; // Index based, order super important!

const someObj = { name: "bob", nickname: "Robert" }; // Order not important, we use keys to access

const someRandomFunction = (param1, param2, param3) => {
  // Function params, does the order matter?
  // Inside the function, no, we use the names!

  console.log(`The message is ${param2}, the sum is ${param1 + param3}`);
};

// Function params, does the order matter?
// Order matters!
someRandomFunction(1, 4, "Hello");
// param1 is 1, param2 is 4, param3 is Hello

someRandomFunction(1, "Hello", 4);
// param1 is 1, param2 is Hello, param3 is 4