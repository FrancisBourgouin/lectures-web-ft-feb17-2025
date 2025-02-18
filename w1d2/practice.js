// I need a function that will find the biggest value in a list of numbers

// Step 1: Figure out the input / output of the assignement
// Name: findBiggestNumber
// Input: List of numbers
// Output: Number (the biggest one)

// Step 2: Figure the behavior depending on the data that we get
// In the case of a list of numbers: the biggest number
// In the case of no parameters: Flipping the table error

// Step 3: Figure out what goes between the input and the output

// Step: Create a currentBiggest variable
// Step: Assign the first value of the list the the currentBiggest
// Step: Iterate over the list of numbers
// Step:    if the currentBiggest is smaller than the value, replace, if not, do nothing
// Step: Return biggest value

const extractValuesFromProcess = function (skipFirstTwo) {
  const originalProcessValues = process.argv;

  if (!skipFirstTwo) {
    return originalProcessValues; // Return will stop the process of the function
  }

  return originalProcessValues.slice(2);
};

const findBiggestNumber = function (listOfNumbers) {
  if (!Array.isArray(listOfNumbers)) {
    return "NOT AN ARRAY ARRRRRR (╯°□°）╯︵ ┻━┻";
  }

  let biggestNumber = listOfNumbers[0];

  for (const number of listOfNumbers) {
    if (number > biggestNumber) {
      biggestNumber = number;
    }
  }

  return biggestNumber;
};

const result1 = findBiggestNumber([12, 34, 234, 56, 5, 3, Infinity]);
const result2 = findBiggestNumber([12, 34, 234]);
const result3 = findBiggestNumber(1308301830183);
const result4 = findBiggestNumber(extractValuesFromProcess(true));

console.log(result1, result2, result3, result4);

"1" == 1; // true, works by type coercion
"5" > 3; // true, works by type coercion
"1" === 1; // false
