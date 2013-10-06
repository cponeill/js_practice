function forEach(array, action) {
  for (var i = 0; i < array.length; i++) {
    action(array[i]);
  }
}

// Here is a function I used during practice today.

function map(func, array) {
  var result = [];
  forEach(array, function (element) {
    result.push(func(element));
  });
  return result;
}

// More function fun

function reduce(combine, base, array) {
    forEach(array, function (element)
      base = combine(base, element);
  });
  return base;
}


function add(a, b) {
	return a + b;
}

function countZero(array) {
	function counter(total, element) {
		return total + (element === 0 ? 1 : 0);
	}
	return reduce(counter, 0, array);
}

function printArray(array) {
	for (var i = 0; i <= array.length; i++) {
		console.log(array[i]);
	}
}
