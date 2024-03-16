// WPU Coding Challenge 2024
// 29/366
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// function removeExclamationMark(s){
//   let result = ''
//   for(let i = 0; i < s.length; i++){
//     if (s[i] !== '!'){
//       result += s[i]
//     }
//   }
//   return result
// }

function removeExclamationMark(s) {
  return s.split('!').join('')
}
console.log(removeExclamationMark("hello World!"))