// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (var i = 1; i <= n; i++) {
    var stairs = '';
    var counter = 0;
    while (counter < i) {
      stairs += '#';
      counter++;
    }
    counter = 0;
    while (counter < (n - i)) {
      stairs += ' ';
      counter++;
    }
    console.log(stairs);
  }
}

module.exports = steps;


/* 

function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      (column <= row) ? stair += '#' : stair += ' ';
    }

    console.log(stair);
  }
}

*/


/* Recursive 

function steps(n) {

  function stepsHelper(hashes, spaces) {
    if (spaces < 0) {
      return;
    }
    var stair = '';

    for (var i = 1; i <= hashes; i++) {
      stair += '#';
    }

    for (var i = 1; i <= spaces; i++) {
      stair += ' ';
    }

    console.log(stair);
  
    return stepsHelper(hashes + 1, spaces - 1);
  }
  return stepsHelper(1, (n - 1));
}
*/

/*

function steps(n, row = 0; stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
  stair += '#';
  } else {
    stair += ' ';
  }

  steps(n, row, stair);
}


*/
