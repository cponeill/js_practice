function range(start, end) {
	var myArray = [];
	for (var i = start; i <= end; i++) {
		myArray.push(i);
	}
	return myArray;
}

function sum(start, end) {
	var count = 1;
	for (var i = start; i < end; i++) {
		count += i;
	}
	return count;
}

console.log(range(1, 20));
console.log(sum(1, 20));
