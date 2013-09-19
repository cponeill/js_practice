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
