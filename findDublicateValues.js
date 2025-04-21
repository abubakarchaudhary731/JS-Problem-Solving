const dummyArray = [2, 4, 6, 8, 4, 5, 5];

function findDublicateValuesOfAnyArray(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        newArray[j] = arr[j];
      }
    }
  }
  return newArray;
}

console.log(
  "Find Dublicate Values Of Any Array",
  findDublicateValuesOfAnyArray(dummyArray)
);
