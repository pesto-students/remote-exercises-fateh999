function cacheFunction(cb) {
  const cache = {};
  return (arg) => {
    if (cache[arg]) {
      return cache[arg];
    }
    cache[arg] = cb(arg);
    return cb(arg);
  };
}

export { cacheFunction };
