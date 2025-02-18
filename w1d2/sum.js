// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored

// $ node sum.js  1 2 3 4 -10 potato 5 😡 => 5
// $ node sum.js  => ANGRY MESSAGE

// Set the arguments from the terminal (save in var somewhere)
// To strict or not to strict
// Extract everything after the second arg

// Input: Values from the terminal command

// Step: Extract the values from the terminal
// Step: If the list only have 2 values, return an angry message and stop
// Step: Create a sum buffer
// Step: Iterate over all the elements from the list
// Step:  Convert the value to a number
// Step:  If the value is not "not a number", add it to the sum, if not, do nothing
// Step: Output the sum with console.log

// Output: Number (sum)

const valuesFromTheTerminalCommand = process.argv;

if (valuesFromTheTerminalCommand.length === 2) {
  console.log("HEY! GIMME VALUES! (╯°□°）╯︵ ┻━┻");
} else {
  let sumBuffer = 0;

  // for(let i = 0; i < valuesFromTheTerminalCommand.length; i++ ){
  //   const value = valuesFromTheTerminalCommand[i]
  // }

  for (const value of valuesFromTheTerminalCommand) {
    const parsedValue = Number(value);

    if (!Number.isNaN(parsedValue)) {
      sumBuffer += parsedValue;
    }
  }

  console.log(sumBuffer);
}

// Not a big fan of the big else statement
// Not super reusable / flexible