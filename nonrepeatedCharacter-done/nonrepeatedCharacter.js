/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  var storage = {};
  for (var i = 0; i < string.length; i++) {
    storage[string[i]] = storage[string[i]] + 1 || 1;
  }

  for (var key in storage) {
    if (storage[key] > 1) {
      var createRegExp = new RegExp(`[${key}]`, 'g');
      string = string.replace(createRegExp, '');
    }
  }

  return string[0];
};
