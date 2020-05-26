const sumEvenArgs = (...args) => {
  return args
    .filter((num) => num % 2 === 0)
    .reduce((num1, num2) => num1 + num2, 0);
};

export { sumEvenArgs };
