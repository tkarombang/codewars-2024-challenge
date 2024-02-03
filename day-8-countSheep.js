// WPU Coding Challenge 2024
// 7/366
// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077

// let countSheep = (num) => {
//   let domba = '';
//   for (let i = 1; i <= num; i++) {
//     domba += i + ' sheep...';
//     domba += `${i} sheep...`;
//   }
//   return domba;
// }

// let countSheep = (num) => {
//   return [...Array(num)].map((_, domba) => `${domba+1} Sheep...`).join('')
// }
const countSheep = (num) => [...Array(num)].map((_, domba) => `${domba+1} Sheep...`).join('')


console.log(countSheep(3))