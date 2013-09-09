var phrase = []; // assign the variable phrase to an empty array
phrase.push("Hello..."); //
phrase.push("... How are you?");
phrase.push(".... Yes... I am quite awkward.");
// push adds new data to the array. 

console.log(phrase);
// outputs ["Hello... ", "... How are you? ".... Yes... I am quite awkward.");

for (var i = 0; i < phrase.length; i++) // Loop the array
  var newPhrase = phrase.join(" "); // Assign a new variable to the array
  
console.log(newPhrase);
// outputs "Hello... ... How are you? .... Yes... I am quite awkward."
