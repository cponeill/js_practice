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
