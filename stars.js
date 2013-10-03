var stars = '';
var count = 25;
for (var i =0; i <= count; i++) {
  stars += '*';
  print(stars);
}

//Another version
var stars = '';
var counter = 0;
while (counter <= 25) {
  stars += '*'
  print(stars);
}

// Simple fun with what happens inside and outside the parenthesis in code
var outside = "I'm on the outside looking in";
{
  var inside = "I'm on the inside looking out";
  print("The person inside says:  " + inside);
}
print("The person outside says: " + outside);
