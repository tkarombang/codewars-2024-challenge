// WPU Coding Challenge 2024
// 30/366
// https://www.codewars.com/kata/56b1f01c247c01db92000076

// function doubleChar(str){
//   let temp = '';
//   for (let i = 0; i < str.length; i++){
//     temp += str[i];
//     temp += str[i];
//   }
//   return temp
// }

// function doubleChar(str) {
// return [...str].map(el => el + el).join('')
// return str.split('').map(el => el + el).join('')
// }

const doubleChar = (str) => str.split('').map(el => el + el).join('')

console.log(doubleChar("illuminati"))