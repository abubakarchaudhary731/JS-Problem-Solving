// ########### Swap Values Without Using Third Variable ###########
let a = 5;
let b = 3;

a = a + b; // 8
b = a - b; // 5
a = a - b; // 3

console.log("a:", a, "b:", b);

// ########### Is This Correct ###########
let c = 3;
// let c = 5;

// ########### Let Value Change or Not after Running Function ###########
let d = 4;
const func = () => {
  d = 8;
};

console.log("value of d before running function:", d);
func();
console.log("value of d after run func:", d);

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}

// var n = 0;
// console.log(n);
// console.log(n++); 
// console.log(++n);

// console.log(3 > 2 > 1);
