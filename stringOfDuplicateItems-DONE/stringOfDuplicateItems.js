/*
  Given an array of numbers, return the duplicates in numerical order 
  as a string separated by a space. EX:

  solution([8,5,3,6,8,1,1,4,3]) //1 3 8
*/

function solution(arr) {
 
    arr = arr.sort();
    var duplicates = []; 
    for (var i = 1; i < arr.length; i++) {
        if(arr[i] === arr[i - 1] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
    
    return duplicates.join(' ');
}