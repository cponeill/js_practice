// This function doesn't really do a whole lot, but I wanted to use it for practice.

function money(value) {
  print("The value of the ", this.currency, " is: ", value, ".");
}

var usDollar = {currency: "U.S. Dollar", money: money};
var mexicanPeso = {currency: "Mexican Peso", money: money};

usDollar.alphaFund("$1.00");
mexicanPeso.alphaFund("$0.6798");

// Here is some more fun function stuff
function Money(value) {
  this.value = value;
  this.currency = function(cash) {
    print("The value of the ", this.value, " is: ", cash, ".");
  };
}

var usDollar = new Money("U.S. Dollar");
usDollar.currency("$100,000");

// More fun with OOP
function Sound(timbre) {
  this.timbre = timbre;
}

Sound.prototype.listen = function(volume) {
  print("When you listen you can hear the ", this.timbre, " of the sound. The ", volume, " doesn't matter");
};

var loudSounds = new Sound("volume")
loudSounds.listen("color")

// More and more and more
Object.prototype.properties = function() {
  var result = [];
  for (var property in this) {
    if (this.hasOwnProperty(property))
      result.push(property);
  }
  return result;
};

var test = {"Your Name Here": true, "My Name Here": true};
print(test.properties);

// Here is some random code too

function isHere() {
    return true;
}

var isAwake = function() {
    return true;
}

console.log(isHere, isAwake);
