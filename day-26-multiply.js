// WPU Coding Challenge 2024
// 26/366
// https://www.codewars.com/kata/5708f682c69b48047b000e07

// function multiply(number) {
//   const digit = Math.abs(number).toString().length
//   console.log(digit)
//   let result = 0;
//   if (digit === 1) {
//     result = number * (Math.pow(5, digit));
//   } else {
//     result = number * (Math.pow(5, digit));
//     console.log(result)
//   }
//   return result;
// }

// const multiply = (number) => {
//   const digit = Math.abs(number).toString().length
//   let result = 0;
//   return digit === 1 ? result = number * (Math.pow(5, digit)) : number * (Math.pow(5, digit));
// }

const multiply = (number) => {
  // return number * Math.pow(5, Math.abs(number).toString().length);
  return number * 5 ** (Math.abs(number).toString().length)
}
console.log(multiply(10))