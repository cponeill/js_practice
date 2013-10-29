// Here is the Fibonacci Sequence coded recursively. This is my first attempy at recursion and after testing the code it looks like figured out the correct answer.

function fib(x) {
  if (x == 0 || x == 1)
    return x;
  else
    return fib(x - 1) + fib(x - 2);
}

console.log(fib(2));

// Here is some more fib fun


var limit = 4000000;
var sum = 0;
a = 1;
b = 1;
c = a + b;
while (c < limit) {
  sum += c;
  a = b + c;
  b = c + a;
  c = a + b;
  console.log(sum);
}
