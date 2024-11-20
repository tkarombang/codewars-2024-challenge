// WPU Coding Challenge 2024
// 71/366
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013

// function findNextSquare(n) {
//   let squares = Math.sqrt(n)
//   console.log(squares % 1 === 0)
//   if (Number.isInteger(squares)) {
//     squares += 1
//     return squares * squares
//   } else {
//     return -1
//   }
// }


const findNextSquare = (n) => Math.sqrt(n) % 1 ? null : Math.pow(Math.sqrt(n) + 1, 2)
console.log(findNextSquare(114))