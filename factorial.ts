const factorial = (num: number): number => {
  // base case
  if (num === 0) {
    return 1
  }

  // recursive case
  /*
    3! = 3 * 2 * 1
    3! = 3 * 2!
    factorial(3) = 3 * factorial(3-1)
    factorial(num) = num * factorial(num - 1)
  */

  return num * factorial(num - 1)
}