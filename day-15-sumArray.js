// WPU Coding Challenge 2024
// 14/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6


// function sumArray(array) {
//   if (array === null || array.length <= 2) return 0;
//   const result = array.sort((a, z) => a - z);
//   let sum = 0
//   for(let i = 1; i < result.length - 1; i++){
//     sum += result[i];
//   }
//   return sum;

// }

// function sumArray(array) {
//   if (array === null || array.length <= 2) return 0;
//   return result = array.sort((a, z) => a - z).slice(1, 4).reduce((acc, curr) => acc + curr);
// }

const sumArray = (array) => array === null || array.length <= 2 ? 0 : array.sort((a, z) => a - z).slice(1, 4).reduce((acc, curr) => acc + curr);


console.log(sumArray([6, 2, 1, 8, 10]))