function generateArray(max) {
  const list = [];
  for (let i = 2; i <= max; i += 1) {
    let c = 0;
    for (let j = 2; j <= i / 2; j += 1) {
      if (i % j === 0) {
        c += 1;
      }
    }
    if (c === 0) {
      list.push(i);
    }
  }
  return list;
}

function sumPrimes(num) {
  const tempArr = generateArray(num);
  const sum = tempArr.reduce((m, n) => m + n, 0);
  return sum;
}

export { sumPrimes };
