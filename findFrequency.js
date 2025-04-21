const findFrequency = (arr) => {
  let freq = {};
  for (let item of arr) {
    if (freq[item]) {
      freq[item]++;
    } else {
      freq[item] = 1;
    }
  }
  return freq;
};

const arr = [2, 4, 6, 8, 4, 5, 5];
const result = findFrequency(arr);
console.log(result);

// ################################# //
const string = "This is a user string";
const countCharactersManual = (str) => {
  let charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
};

console.log(countCharactersManual(string));
