// The utility function in Node.js can be used for quick debugging by inspecting and object properties like the following code

var util = require("util");
var a = {1: true, 2: false};
console.log(util.inspect(a));
// ---> { '1': true, '2': false } 
