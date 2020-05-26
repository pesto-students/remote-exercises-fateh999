function chunkArrayInGroups(array, chunkSize) {
  const chunkedArray = [];
  while (array.length > chunkSize) {
    chunkedArray.push(array.splice(0, chunkSize));
  }
  if (array.length) {
    chunkedArray.push(array);
  }
  return chunkedArray;
}

export { chunkArrayInGroups };
