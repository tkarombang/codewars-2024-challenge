// WPU Coding Challenge 2024
// 25/366
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

// function monkeyCount(n) {
//   let arr = Array(n);
//   console.log(arr)
//   let result = [];
//   for (let i = 1; i < arr.length + 1; i++){
//     result.push(i)
//   }
//   return result;
// }

// const monkeyCount = (n) => arr = [...Array(n)].map((_, a) => a + 1)

function monkeyCount(n) {
  // const result = []
  // for (let i = 1; i <= n; i++){
  //   result.push(i)
  // }
  // return result;

  return Array.from({
    length: n
  }, (_, i) => i + 1)
}



console.log(monkeyCount(5))