const sumAllOddFiboNumbers = (num) => {
  let currentNumber = 0;
  let previousNumber = 0;
  const oddNumbers = [];

  while (currentNumber <= num) {
    if (currentNumber % 2 === 0) {
      oddNumbers.push(currentNumber);
    }

    currentNumber += previousNumber;
    previousNumber = currentNumber - previousNumber;
  }

  return oddNumbers;
};

sumAllOddFiboNumbers(10);
