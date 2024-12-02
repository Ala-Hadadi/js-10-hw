// Using an example, explain the difference between block,global and function scope in variables.

// Global scope: global scope means you can acssess variables anywhere in the code.
// Example:
let flower = "lily";
console.log(flower);

// Block scope: block scope means you can acssess variables only in blocks "{}" they are declared.
//Example:
{
  let month = "may";
  console.log(month);
}
// console.log(month);   //--> not defined

// Function scope: function scope means you can acssess variables only within the functions they are declared in.
//Example:
function color() {
  let favColor = "blue";
  console.log(favColor);
}
color();
// console.log(favColor);    //--> not defined
