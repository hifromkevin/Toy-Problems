// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  stringA = stringA.replace(/[^\w]/g,'').toLowerCase();
  stringB = stringB.replace(/[^\w]/g,'').toLowerCase();

  let anagramMapA = {};
  let anagramMapB = {};

  if (stringA.length !== stringB.length) {
    return false;
  }

  for (var i = 0; i < stringA.length; i++) {
    anagramMapA[stringA[i]] = anagramMapA[stringA[i]]++ || 1;
    anagramMapB[stringB[i]] = anagramMapB[stringB[i]]++ || 1;
  }

  for (var key in anagramMapA) {
    if (anagramMapA[key] !== anagramMapB[key]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;

/* ALT solution 

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}

*/