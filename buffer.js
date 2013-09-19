// Let's find the number of bytes in a buffer up to 100

var buffer = new Buffer(100);

for (var i = 0; i < buffer.length; i++) {
  buffer[i] = i;
}
console.log(buffer);

// Let's find the bytes between 30 and 50

new bufferTwo = buffer.slice(30, 50);

console.log(bufferTwo);

// Here is some more weird buffer code
var buffer = new Buffer(100);
var slice = new Buffer(40, 60);
var targetStart = 0;
    sourceStart = 40;
    soureEnd = 60;
buffer.copy(slice, targetStart, sourceStart, sourceEnd);
