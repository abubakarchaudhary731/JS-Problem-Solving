const array = ["joe", "maxwell", "jon", "john", "sid", "johnny"];
const number = 3;

function findMaxLength(arr, num) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // Now Sort by string length in descending order
      if (arr[i].length < arr[j].length) {
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
      }
    }
  }
  for (let k = 0; k < num; k++) {
    newArray[k] = arr[k];
  }
  return newArray;
}

console.log(findMaxLength(array, number));


function findMaxLengthUsingJsFunction(arr, num) {
  return arr
    .sort((a, b) => b.length - a.length) // Sort by string length in descending order
    .slice(0, num); // Get the top 'num' elements
}

console.log(findMaxLengthUsingJsFunction(array, 2));