// Print 1 to 100 without any loop
const recursiveFunction = (num) => {
  if (num > 100) return;
  console.log(num);
  recursiveFunction(num + 1);
};

recursiveFunction(1);
