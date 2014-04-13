// This simple script will find the largest number in an array

var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 101, 10];
var n = 25;
var m = a[0];

for (var i = 0; i < n; i++) {
  if (a[i] >= m) {
    m = a[i];
  }
}

console.log("The answer you are looking for is " + m);

=> The answer you are looking for is: 101
