const power = (num: number, pow: number): number => {
  // base case
  if (pow === 0) {
    return 1
  }
  
  // recursive case
  /*
    5 ^ 3 = 5 * 5 * 5
    5 ^ 3 = 5 * 5 ^ 2
    power(5, 3) = 5 * power(5, 2)
    power(n, p) = n * power(n, p-1)
  */

  return num * power(num, pow - 1)
}