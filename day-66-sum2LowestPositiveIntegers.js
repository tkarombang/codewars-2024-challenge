// WPU Coding Challenge 2024
// 66/366
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// function sumTwoSmallestNumbers(numbers) {
// let lowest = numbers[0]
// let secondLowest = numbers[1]
// console.log(lowest)
// console.log(secondLowest)
// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] < lowest){
//     secondLowest = lowest
//     lowest = numbers[i]
//   }else if(numbers[i] !== lowest && secondLowest > numbers[i]){
//     secondLowest = numbers[i]
//     console.log(secondLowest)
//   }
// }
// console.log(lowest)
// console.log(secondLowest)
// return lowest + secondLowest

// }

function sumTwoSmallestNumbers(numbers) {
  // numbers.sort((a, b) => a - b)
  // console.log(numbers)
  // const result = numbers[1] + numbers[0]
  // return result
  const [a, b] = numbers.sort((a, b) => a - b);
  return a + b;
}

console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
