/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


var telephoneWords = function(digitString) {
  // TODO: return every combination that can be spelled on a phone with these digits
  var words = [];

  function telephoneHelper(word, arr) {
    if (arr.length) {
      var digit = arr[0];
      var letters = phoneDigitsToLetters[digit].split('');

      for (var i = 0; i < digit.length; i++) {
        telephoneHelper(word + letters[i], arr.slice(1));
      }
    } else {
      return words.push(word);
    }
  }

  telephoneHelper('', digitString.split(''));

  return words;
};

//Loop through digit string (2 then 7,then 4, then 5)
//on each number, loop through letters A then B then C
//Start with first of each: APGJ
//Then, second of last digit: APGK

/* 
var telephoneWords = function(digitString) {
  var words = [];

  var lettersForDigits = function (word, digits) {
    if (digits.length === 0) {
      return words.push(word);
    }

    var currentDigit = digits[0];
    var letters =
      phoneDigitsToLetters[currentDigit].split('');
    for (var i = 0; i < letters.length; i++) {
      lettersForDigits(word + letters[i], digits.slice(1));
    };
  };

  lettersForDigits('', digitString.split(''));

  return words;
};



*/
