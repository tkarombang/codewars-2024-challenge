// WPU Coding Challenge 2024
// 70/366
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/

function isSquare(n) {
  let square = Math.sqrt(n)
  // return Number.isInteger(square)

  // if( square % 1 === 0){
  //   return true
  // }else{
  //   return false
  // }

  // return Math.sqrt(n) % 1 === 0

  // for (let i = 0; i <= n; i++) {
  //   if (n === 0) {
  //     return true
  //   } else if (n / i === i) {
  //     return true
  //   }
  // }
  // return false1

  // return Math.sqrt(n) % 1 === 0 ? true : false;
}

console.log(isSquare(25))