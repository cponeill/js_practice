function Factorial(num) {
  this.num = num;
  this.number = function(count) {
    if (num < count) {
      return num * (num - count);
    } else {
      return num;
    }
  };
}

var factorialFive = new Factorial(5);
factorialFive.number(1);
