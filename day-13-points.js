// WPU Coding Challenge 2024
// 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

// function points(games) {
//   let totalWin = 0;
//   for (let i=0; i<games.length; i++){
//     let x = games[i][0];
//     let y = games[i][2];
//     if(x > y){
//       totalWin += 3;
//     } else if (x === y){
//       totalWin += 1
//     }
//   }
//   return totalWin;
// }


// function points(games) {
//   let totalWin = games.reduce((acc, [x, _, y]) => (x > y ? 3 : x === y ? 1 : 0) + acc, 0);
//   return totalWin;
// }


const points = (games) => totalWin = games.reduce((acc, [x, _, y]) => (x > y ? 3 : x === y) + acc, 0); //jika True integernya 1 jika false integernya 0

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));