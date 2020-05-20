function cacheFunction(cb) {
  const cache = {};
  return (arg) => {
    if (arg in cache) {
      return cache[arg];
    }
    cache[arg] = cb(arg);
    return cache[arg];
  };
}

export { cacheFunction };
