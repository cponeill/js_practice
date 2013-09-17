// Let's find the number of bytes in a buffer up to 100

var buffer = new Buffer(100);

for (var i = 0; i < buffer.length; i++) {
  buffer[i] = i;
}
console.log(buffer);
