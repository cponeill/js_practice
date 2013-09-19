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
