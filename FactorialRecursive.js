let fac = 5;

const factorialRecursive = (number) => {
  if (number === 2) {
    return 2;
  }
  debugger
  return number * factorialRecursive(number - 1);
};

factorialRecursive(fac)

const findFactorialIterative = (fac) => {
  let counter = 1;
  if (fac === 2) {
    answer = 2;
  }
  for (let i = 2; i <= fac; i++) {
    counter = counter * i;
  }

  //return counter;
};

//findFactorialIterative(fac);
