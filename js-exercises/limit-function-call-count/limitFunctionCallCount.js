const limitFunctionCallCount = (cb, callCount) => {
  let innerCount = 0;

  return (...args) => {
    if (innerCount >= callCount) {
      return null;
    }
    innerCount += 1;
    return cb(...args);
  };
};

export { limitFunctionCallCount };
