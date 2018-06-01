// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  var isNegative = (n < 0) ? true : false;
  n = Math.abs(n).toString();

  return (isNegative) ?
  (0 - Number(n.split('').reverse().join(''))) : 
  Number(n.split('').reverse().join(''));
}

module.exports = reverseInt;
