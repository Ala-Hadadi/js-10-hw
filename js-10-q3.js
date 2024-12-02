// According to your js10 session, write a code that shows why we shouldn't use var?
//because var is a global scope except the times that is declared within a function so it can cause some ploblems and bugss in the code.
function example() {
  if (true) {
    var str = "hello";
    console.log(str);
  }
  console.log(str);
}

example();
// console.log(str);     // ---> not defined

// ----------------------------------------------
{
  var num = 11454785;
  console.log(num); 
}

console.log(num);
