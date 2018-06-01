/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  // TODO: Your code here!
  var string2Letters = `[^${string2[0]}`;

  for (var i = 1; i < string2.length; i++) {
    string2Letters += string2[i];
  }

  string2Letters += ']';

  var regEx = new RegExp(string2Letters, 'g');

  return string1.replace(regEx, '');
};
