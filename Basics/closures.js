function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  a = 100;
  return y; // Here not only the function code is returned but a closure is returned. Closure enclosed function along with its lexical environment is returned.
}

var z = x();

console.log(z);
z();

// CLOSURE
// A function bundeled together with its lexical scope forms a closure.

function m(){
    var o = 900
    function n(){
        var p = 7
        function q(){
            console.log(p,o)
        }
        q()
    }
    n()
}
m()

// Uses of Closures
/*
1.) Module design Pattern
2.) Currying
3.) Functions like once
4.) memoize
5.) maintaining state in async world
6.) setTimeouts
7.) Iterators
*/