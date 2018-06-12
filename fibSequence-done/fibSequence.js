/* Return the first n digits of the fibonacci sequence as an array. EX:

fibSequence(6) //[0,1,1,2,3,5]
*/

function fibSequence(n) {
  var fib = [0];

  for (var i = 0; i < (n - 1); i++) {
    fib.push(fibHelper(i));
  }

  return fib;
}

function fibHelper(n) {
  if(n <= 1) return 1;

  return fibHelper(n - 1) + fibHelper(n - 2);
}