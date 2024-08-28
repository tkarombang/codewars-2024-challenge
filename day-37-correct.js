// WPU Coding Challenge 2024
// 37/366
// https://www.codewars.com/kata/577bd026df78c19bca0002c0

// function correct(string){
// for(let i = 0; i < string.length; i++){
//   return
// }

// return string
// .split('')
// .map((char) => {
// if(char === '0') return 'O';
// if(char === '5') return 'S';
// if(char === '1') return 'I';
// return char === '0' ? 'o' : char === '5' ? 's' : char === '1' ? 'i' : char
// return char;
// }).join('')
// }

// function correct(string) {
// const maps = {
//   0: "O",
//   1: "I",
//   5: "S",
// };
//   return string.replace(/[015]/g, (c) => {
//     return { 0: "O", 1: "I", 5: "S"}[c]});
// }
// const correct = (string) => string.replace(/[015]/g, (c) => {return { 0: "O", 1: "I", 5: "S"}[c]});
const correct = (string) => string.replace(/[015]/g, (c) => ({ 0: "O", 1: "I", 5: "S" }[c]));

console.log(correct("L0ND0N"));
