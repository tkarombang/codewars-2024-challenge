// WPU Coding Challenge 2024
// 42/366
// https://www.codewars.com/kata/5865918c6b569962950002a1

// function strCount(str, letter){
// count = 0
//   for (let i = 0; i <= str.length; i++){
//     if(str[i] === letter){
//       count++
//     }
//   }
//   return count;
// }

// const strCount = (str, letter) => {
//   const arr = Array(...str)
//   const filter = arr.filter((a) => a === letter)
//   return filter ? filter.length : 0
// }

const strCount = (str, letter) => str.split("").filter((el) => el === letter).length;

console.log(strCount("bobo", "o"));
