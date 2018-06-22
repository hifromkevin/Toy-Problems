/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  var result = [];
  var holder = {};

  for (var i = 0; i < string.length; i++) {
    (holder[string[i]]) ? holder[string[i]]++ : holder[string[i]] = 1;
  }

  for (key in holder) {
    result.push([key, holder[key]]);
  }

  return result.sort(sorting);
};


function sorting(a, b) {
    if (a[1] === b[1]) {
      return (a[0] === b[0]) ? 0 : ((a[0] < b[0]) ? -1 : 1);
    }
    else {
        return (a[1] < b[1]) ? 1 : -1;
    }
}