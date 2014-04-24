// This simple script will allow a user to add up any numbers in an array.

function addArray(arr) {
  var sum = 0;
  for (var i = 0;, j = arr.length; i < j; i++) {
    sum += arr[i];
  }
  return sum;
}

=>addArray([2, 3, 4, 5]);
=> 14
