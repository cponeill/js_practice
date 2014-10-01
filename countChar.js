function countBs(string) {
	var counter = 0;
	for (var i = 0; i <= string.length; i++) {
		if (string.charAt(i) == "B" || string.charAt(i) == "b")
			counter += 1;
	}
	return counter;
}

console.log(countBs("BBCB"));

function countChar(string, ch) {
	var counter = 0;
	for (var i = 0; i <= string.length; i++) {
		if (string.charAt(i) == ch)
			counter += 1;
	}
	return counter;
}

console.log(countChar("kakkerlakkk", "k"));
