/*
 * Write a function that accepts a 2-dimensional array (that is, an array containing many same-length arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Please write some form of specs, tests, or assertions for your code, and check as many edge cases as you can think of
 *
 * example:

    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);

    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix) {
  // TODO: Implement me!
  var startColumn = 0;
  var endColumn = matrix[0].length - 1; //2
  var startRow = 0;
  var endRow = matrix.length - 1; //2
  var storageMatrix = [];

  while (startColumn <= endColumn && startRow <= endRow) {

    //left to right
    for (var i = startColumn; i <= endColumn; i++) {
      storageMatrix.push(matrix[startColumn][i]);
    }
    startRow++; 

    //top to bottom
    for (var i = startRow; i <= endRow; i++) {
      storageMatrix.push(matrix[i][endColumn]);
    }
    endColumn--; 

    //right to left
    for (var i = endColumn; i >= startColumn; i--) {
      storageMatrix.push(matrix[endRow][i]);
    }
    endRow--; 

    //bottom to top
    for (var i = endRow; i >= startRow; i--) {
      storageMatrix.push(matrix[i][startColumn]);
    }
    startColumn++; 
  }

  return storageMatrix;

};
