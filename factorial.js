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
