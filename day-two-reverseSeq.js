// WPU Coding Challenge 2024
// 2/366
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = n => {
// const arr = [];
//   for(let i = n; i>=1; i--){
//     console.log(arr.push(i));
//   }

//   return arr;
// };

// const reverseSeq = n => {
//   // return [...Array(n)];
//   return Array(n).fill().map((el, i) => n - i)
// }

const reverseSeq = length => Array.from({
  length
}, () => length--);

console.log(reverseSeq(5));