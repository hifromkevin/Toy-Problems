// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let maxCount = 0;
  let maxLetter = '';

  for (var char of str) {
    (charMap[char]) ? charMap[char]++ : charMap[char] = 1;
    //charMap[char] = charMap[char] + 1 || 1;
  }

  for (var char in charMap) {
    if (charMap[char] > maxCount) {
      maxCount = charMap[char];
      maxLetter = char;
    }
  }
  return maxLetter;
}

module.exports = maxChar;
