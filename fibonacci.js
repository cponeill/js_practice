// Here is the Fibonacci Sequence coded recursively. This is my first attempy at recursion and after testing the code it looks like figured out the correct answer.

function fib(x) {
  if (x == 0 || x == 1)
    return x;
  else
    return fib(x - 1) + fib(x - 2);
}

console.log(fib(2));
