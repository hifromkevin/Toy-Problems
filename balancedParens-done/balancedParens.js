/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
  var holder = [];
  for (var i = 0; i < input.length; i++) {
    if (input[i] === '[' || input[i] === '{' || input[i] === '(') {
      holder.push(input[i]);
    }
    if (input[i] === ']') {
      if(holder[holder.length - 1] !== '[') {
        return false;
      } else {
        holder.pop();
      }
    } else if (input[i] === '}') {
      if(holder[holder.length - 1] !== '{') {
        return false;
      } else {
        holder.pop();
      }
    } else if (input[i] === ')') {
      if(holder[holder.length - 1] !== '(') {
        return false;
      } else {
        holder.pop();
      }
    }
  }

  return storage.length === 0 ? true : false;
};


