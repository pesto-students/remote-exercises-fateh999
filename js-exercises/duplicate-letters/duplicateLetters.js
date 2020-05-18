function duplicateLetters(...args) {
  const [word] = args;
  let maxFrequency = 0;
  const wordArray = word.split('');
  const uniqueWordArray = Array.from(new Set(word));

  uniqueWordArray.forEach((uniqueLetter) => {
    let frequency = 0;
    wordArray.forEach((letter) => {
      if (letter === uniqueLetter) {
        frequency += 1;
      }
    });
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
    }
  });
  return maxFrequency === 1 ? false : maxFrequency;
}

export { duplicateLetters };
