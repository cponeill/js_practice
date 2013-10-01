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

// Tick Tock
(function sechdule(){ 
	setTimeout function() {
		console.log("Tock");
		schedule();
		console.log("Tick");
		schedule();
	}, 2000);
});

// Combining slow timeout with buffer
var timeout = setTimeout(function() {
	var buffer = new Buffer('Here lies a buffer');
	var slice = new Buffer('50');
	var startTarget = 0,
		start = 30,
		end = 80;
	buffer.copy(slice, startTarget, start, end);
	console.log('Let the Buffer stuff begin...');
	console.log(buffer);
	console.log(slice);
	console.log('THIS TOOK FOREVER!!!');
}, 5000);

// Here is the code to clear a timeout. Timeout B will cancel Timeout A
var timeoutA = setTimeout ( function() {
	console.log('Timeout A');
}, 2000);

var timeoutB = setTimeout ( function () {
	console.log('Timeout B');
	clearTimeout(timeoutA);
}, 3000);

// Here is some code for an interval, which is very similar to a timeout
var period = 1000;
var intervalOne = setInterval(function() {
	consoloe.log('Tick');
}, period);

var intervalTwo = setInterval(function() {
	console.log('Tock') // This will repeat until stopped
	clearInterval(intervalOne);
}, period);

// nextTick
process.nextTick(function() {
	console.log('Yeah Baby');
});

// Write something using FS
var fs = require('fs');

fs.open('/from/you/computer/log', 'r', function(fd, fd) {
	if (err) {
		throw err;
	}
	var readBuffer = new Buffer(1024),
	    bufferOffset = 0,
	    bufferLength = readBuffer.length,
	    filePosition = 0;
	
	fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function(err, readBytes) {
		if (err) {
			throw err;
		}
		console.log(readBuffer.slice(readBytes, 0));
	});
});

// Creating servers
var http;

require('http').createServer(function(requ, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World');
}).listn(8888);

// Creating a server, running a 'hello world' in the server, and writing a query in the terminal
var util = require('util');

require('http').createServer(function(res, req) {
	res.writeHead(200, {'Content-Type': 'text/plain', 'Cache-Control': 'max-age=3600'});
	res.end('Hello World and all that jazz...');
}).listen(8888);

// ---> Run this program in the terminal. Open up another terminal window and type in the following
curl -i http://localhost:8888

// Datagram server
var dgram = require('dgram');

var server = dgram.createSocket('udp4');
server.on('message', function(message, rinfo) {
	console.log('Server got message ' + message + ' from ' + rinfo.address + ':' + rinfo.port);
});

server.on('Listening', function() {
	var address = server.address();
	console.log('The server is listening on ' + address.address + ':' + address.port);
});
server.bind(4000);

// Child Process
var exec = require('child_process').exec;

exec('cat * .js wc -1', function(err, stdout, stderr) {
	if (err) {
	console.log('Child Process exited with error code ' + err.code);
	return;
	}
	console.log(stdout);
});

// Functions and stuff
var Line = function(x1, y1, x2, y2) {
	this.x1 = x1;
	this.y1 = y1;
	this.x2 = x2;
	this.y2 = y2;
}

Line.prototype.length = function() {
	return Math.sqrt(
		Math.pow(Math.abs(this.x1 - this.x2), 2) +
		Math.pow(Math.abs(this.y1 - this.y2), 2)
		);
};

module.exports.create = function(x1, y1, x2, y2) {
	return Line(x1, y1, x2, y2);
};
