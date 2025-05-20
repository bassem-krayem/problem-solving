/*
  This algorithm:
  1. Takes a string as input.
  2. Passes it into a function called `reverseString` to return the reversed version.
*/

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const reverseString = (str) => {
  /*
  My approach:
  This function reverses a given string.

  1. Create a new variable `newStr` and set it to an empty string.
  2. Use a `for` loop to iterate over the original string.
     a. In each iteration, append the character at index `str.length - i - 1` 
        to `newStr`. This means we're starting from the end of the input string 
        and adding each character one-by-one from right to left.
  3. After the loop finishes, return `newStr`.
  */

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    newStr += str[str.length - i - 1];
  }

  return newStr;
};

rl.question("Please enter the string that you want to reverse: ", (str) => {
  console.log(`The reverse of the string "${str}" is: "${reverseString(str)}"`);
  rl.close();
});
