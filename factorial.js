function Factorial(num) {
  this.num = num;
  this.number = function(count) {
    while (num <= count) {
      return num * (num - count);
    }
  };
}

var factorialFive = new Factorial(5);
factorialFive.number(1);

// Here is a recursive way to write this function as well
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial (n - 1);
  }
}
