// WPU Coding Challenge 2024
// 23/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// function sumMix(x) {
//   let sum = 0
//   for (let i = 0; i < x.length; i++) {
//     let num = parseFloat(x[i])
//     if(!isNaN(num)){
//       sum += num;
//     }
//   }
//   return sum
// }

// function sumMix(x) {
//   let total =0;
//   for (let i = 0; i < x.length; i++){
//     total += +x[i]
//   }
//   return total
// }


// function sumMix(x) {
//   return x.reduce((acc, curr) => acc + Number(curr))
// }

const sumMix = (x) => x.reduce((acc, curr) => acc + Number(curr))
console.log(sumMix([9, 3, '7', '3']))