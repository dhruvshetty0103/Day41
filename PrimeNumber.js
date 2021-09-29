// program to check if a number is prime or not
// take input from the user
let checkNumber;
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter number to check whether it is prime or not:", (answer) => {
  checkNumber = answer;
  let isPrime = true;

  // check if number is equal to 1
  if (checkNumber === 1) {
    console.log("1 is neither prime nor composite number.");
  }

  // check if number is greater than 1
  else if (checkNumber > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < checkNumber; i++) {
      if (checkNumber % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${checkNumber} is a prime number`);
    } else {
      console.log(`${checkNumber} is a not prime number`);
    }
  }

  // check if number is less than 1
  else {
    console.log("The number is not a prime number.");
  }
  rl.close();
});
