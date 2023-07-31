const factorial_memo = new Map();

const memoized_factorial = (num: number): number => {
  // Base case
  if (num === 0) {
    return 1;
  }
  // Memoization
  if (factorial_memo.has(num)) {
    return factorial_memo.get(num);
  }
  // Recursive case
  const res = num * memoized_factorial(num - 1);
  factorial_memo.set(num, res);
  return res;
};

export default memoized_factorial;
