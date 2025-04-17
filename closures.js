//Closures in javascript
// A function along with its lexical scope bundled together is called a closure.
// A closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.
// A closure is a function that has access to the parent scope, even after the parent function has closed. 
function x(){
  var a=7;
  function y(){
    console.log(a);
  }
  y();
}
x();

//Closures in JavaScript
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log(`Outer: ${outerVariable}, Inner: ${innerVariable}`);
    };
  }
  
  
  const closureFunc = outerFunction("outside");
  closureFunc("inside");
