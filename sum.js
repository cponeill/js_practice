function sum(numbers) {
  var total = 0;
  forEach (numbers, function(number) {
    total += number;
  });
  return total;
}

show(sum([1, 5, 25]));
