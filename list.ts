// input is a positive integer
const list = (num: number): number[] => {
  // base case
  if (num === 1) {
    return [1]
  }

  // recursive case
  /*
    [3, 2, 1] -> [3] is [num], [2, 1] is list(num - 1)
  */

  const rest = list(num - 1)
  return [num].concat(rest)
}