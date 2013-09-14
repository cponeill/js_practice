function negate(func) {
  return function(x) {
    return !func(x);
  };
}

var isNotNaN = negate(isNaN);
isNotNaN(NaN);
// false
