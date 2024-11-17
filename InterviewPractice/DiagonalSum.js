// Problem Description
// Given a square matrix mat, return the sum of the matrix diagonals.
// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary 
// diagonal that are not part of the primary diagonal.

function diagonalSumII(mat) {
  let d1Sum = 0, d2Sum = 0;
  //loop through the entire matrix
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
        //left diagonal if i=j, calculate sum of left diagonal
      if (i === j) {
        d1Sum += mat[i][j];
      }
      //right diagonal id i+j=n-1, calculate sum of right diagonal and extract the common element between
      //left and right diagonal
      if (i + j === mat.length - 1 && i !== j) {
        d2Sum += mat[i][j];
      }
    }
  }
  //return sum of left and right diagonals
  return d1Sum + d2Sum;
}
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalSumII(matrix));
