function checkPythagoras(h, a, b) {
  if (h * h === a * a + b * b) {
    return true;
  }
  return false;
}

function isTriangle(a, b, c) {
  const max = Math.max(a, b, c);
  if (max === a) {
    return checkPythagoras(a, b, c);
  }
  if (max === b) {
    return checkPythagoras(b, a, c);
  }
  return checkPythagoras(c, a, b);
}

export { isTriangle };
