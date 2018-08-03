/*

Given a string of parentheses, write a function to compute the 
minimum number of parentheses to be removed to make the 
string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1. 
Given the string ")(", you should return 2, since we must 
remove all of them.

*/

function parensToRemove(str) {
  var parenHolder = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      parenHolder.push(str[i]);
    } else if (str[i] === ')') {
      if (parenHolder[length - 1] === '(') {
        parenHolder.pop();
      } else {
        parenHolder.push(str[i]);
      }
    }
  }

  return parenHolder.length;
}

