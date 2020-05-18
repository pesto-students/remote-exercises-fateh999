function generateArray(min, max) {
  const list = [];
  for (let i = min; i <= max; i += 1) {
    list.push(i);
  }
  return list;
}

function sumAll(arr) {
  const [a, b] = arr;
  if (a > b) {
    const tempArr = generateArray(b, a);
    const sum = tempArr.reduce((m, n) => m + n, 0);
    return sum;
  }
  const tempArr = generateArray(a, b);
  const sum = tempArr.reduce((m, n) => m + n, 0);
  return sum;
}

export { sumAll };
