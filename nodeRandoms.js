// This is the code I am writing down while learning Node.js (and javacript in general). I am using it to practice my coding skills (and even my typing skills.)

// Here is the first version of code that demonstrates blocking I/O.
var post = db.query("SELECT * FROM posts with id = 1");
doSomethingWithPost(post);
doSomethingElse();

// This could be what it is changed too...
callback = function (post) {
	doSomethingWithPost(post);
};
db.query("SELECT * FROM posts with id = 1", callback);
doSomethingElse();

// And yet another
db.query("SELECT * FROM posts with id = 1",
	function(post) {
		doSomethingWithPost(post);
	});
doSomethingElse();

// Here is some code for listening for an event in a web browser (like a button click) with javascript.
var clickCount = 0;
document.getElementById('myButton').onclick = function() {
	clickCount++;
	alert("Clicked " + clickCount + " times.");
};

// Here it is in jQuery
(function() {
	var clickCount = 0;
	$('button#myButton').click(function() {
		clickCount++;
		alert("Clicked " + clickCount + " times.");	
	});
})();

// Crazy Code
var myfunction = function() {
	// do some weird and crazy shit man
};
myFunction.someProperty = 'CRAZY SHIT DUDE';
console.log(myFunction.someProperty);
// ---> "CRAZY SHIT DUDE"

// Crazy morning code
var a = {1: true, 2: false, 3: maybe, 4: not quite, 5: almost there, 6: GOT IT};
console.log("This is a number: %d, and this is a string: %s, and this is an object outputted into JSON: %j", 42, "Hello", a);

console.warn("WARNING!");

//
var util = require("util");
var a = {1: true, 2: false};
console.log(util.inspect(a));
