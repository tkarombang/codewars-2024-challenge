// WPU Coding Challenge 2024
// 63/366
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// function findShort(s){
//   const words = s.split(' ')
//   let wordShort = words[0].length
//   console.log(wordShort)
//   for (let i = 0; i < words.length; i++){
//     console.log(words[i].length < wordShort)
//     if(words[i].length < wordShort){
//       wordShort = words[i].length
//     }
//   }
//   return wordShort
// }

// const findShort = (s) => {
//   return Math.min(...s.split(' ').map(s => s.length))
// }

const findShort = (s) =>
  s
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .pop().length;

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
