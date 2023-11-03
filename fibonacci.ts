// input is a positive integer
// returns element of fibonacci sequence at given index
const fibonacci = (number: number): number => {
  // first base case
  if (number <= 0) {
    return 0
  }

  // second base case
  if (number == 1) {
    return 1
  }

  // recursive case
  return fibonacci(number - 1) + fibonacci(number - 2)
}

// 0, 1, 1, 2, 3, 5, 8, 13
console.log(fibonacci(3)) // 2
console.log(fibonacci(6)) // 8
