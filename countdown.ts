const printCountdown = (number: number): void => {
  // base case
  if (number <= 0) {
    return
  }

  // recursive case
  console.log(number)
  printCountdown(number - 1)
}

printCountdown(5)
