/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // TODO: Your code here!
  let currentRunLength = 0;
  let longestRunLength = 0;
  let currentRunCoords = [0,0];
  let longestRunCoords = [0,0];

  for (var i = 0; i < string.length; i++) {
    if (string[i] === string[i - 1]) {
      currentRunLength++;
      currentRunCoords[1] = i;
      if (currentRunLength > longestRunLength) {
        longestRunLength = currentRunLength;
        longestRunCoords = currentRunCoords.slice();
      }
    } else {
      currentRunLength = 1;
      currentRunCoords = [i,i]
    }
  }

  return longestRunLength > 0 ? longestRunCoords : null;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};


abbbccddddeefffffg

start at 1: b = a? No
2: b = b? Yes! length is 2, longest is 2, currentRun is [1,2] 
3: b = b? Yes! length is 3, longest is 3, currentRun is [1,3]
4: No, b != c. Length is 1, CurrentRun is [4,4]
5; Yes! 2 length, [4,5]

currentRunLength
longestRunLength
longestRunCoords = [x,y]
currentRunCoords = [a,b]