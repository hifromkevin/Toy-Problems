// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('');
}

module.exports = reverse;

/*ALT 1, without .reverse()

function reverse(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

*/

/*ALT 2, reduce()

function reverse(str) {
  return str.split('').reduce( (reversed, character) => {
    return character + reversed;
  }, '');
}

Can rewrite:
function reverse(str) {
  return str.split('')
  .reduce( (rev, char) => char + rev, '');
}

*/