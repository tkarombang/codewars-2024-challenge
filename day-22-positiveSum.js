// WPU Coding Challenge 2024
// 21/366
// https://www.codewars.com/kata/5715eaedb436cf5606000381

// function positiveSum(arr){
//   const zero = arr.every(num => num < 0);
//   if(zero){
//     return 0;
//   }else {
//     return arr.filter(a => a > 0).reduce((acc, cur) => acc + cur)
//   }  
// }

// function positiveSum(arr){
// let result = 0;
// for (let i = 0; i < arr.length; i++){
//   if (arr[i] > 0){
//     result += arr[i]
//   }
// }
// return result
// }

const positiveSum = (arr) => arr.reduce((acc, curr) => acc + (curr > 0 ? curr : 0), 0)

console.log(positiveSum([-1, -2, 3, -4, -5]))