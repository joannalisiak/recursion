// input is a positive integer
// returns number of steps needed to get back to zero for given number

const collatz = (number: number): number => {
  // base case
  if (number == 1) {
    return 0
  }

  if (number % 2 == 0) {
    // first recursive case
    return 1 + collatz(number / 2)
  } else {
    // second recursive case
    return 1 + collatz(3 * number + 1)
  }
}

console.log(collatz(1)) // 0
console.log(collatz(3)) // 7
console.log(collatz(8)) // 3
