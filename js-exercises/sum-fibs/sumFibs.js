function generateArray(n) {
  const arr = [0, 1];
  for (let i = 2; i < n + 1; i += 1) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr.filter((a) => a % 2 !== 0 && a < n);
}

function sumFibs(num) {
  const tempArr = generateArray(num);
  const sum = tempArr.reduce((m, n) => m + n, 0);
  return sum;
}

export { sumFibs };
