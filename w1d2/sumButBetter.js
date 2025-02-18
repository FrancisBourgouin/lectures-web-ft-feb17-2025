// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored

// Input: Values from the terminal command

// Step: Extract the values from the terminal
// Step: If the list only have 2 values, return an angry message and stop
// Step: Create a sum buffer
// Step: Iterate over all the elements from the list
// Step:  Convert the value to a number
// Step:  If the value is not "not a number", add it to the sum, if not, do nothing
// Step: Output the sum with console.log

// Output: Number (sum)


// Extract values from process.argv
// Input: skipFirstTwo (boolean)
// Output: list of values (array)

const extractValuesFromProcess = function(skipFirstTwo){
  const originalProcessValues = process.argv

  if(!skipFirstTwo){
    return originalProcessValues // Return will stop the process of the function
  }

  return originalProcessValues.slice(2)
}

// Calculate a sum
// Step: Create a sum buffer
// Step: Iterate over all the elements from the list
// Step:  Convert the value to a number
// Step:  If the value is not "not a number", add it to the sum, if not, do nothing
// Step: return the sum

const calculateSum = function(listOfValues){
  let sumBuffer = 0

  for(const value of listOfValues){
    const parsedValue = Number(value);

    if (!Number.isNaN(parsedValue)) {
      sumBuffer += parsedValue;
    }
  }

  return sumBuffer
}

// Output a result

const outputResult = function(result){
  console.log("The result is:")
  console.log(result)
}

const values = extractValuesFromProcess(true)

if(values.length > 0){
  const sum = calculateSum(values)
  outputResult(sum)
} else {
  console.log("(╯°□°）╯︵ ┻━┻")
}