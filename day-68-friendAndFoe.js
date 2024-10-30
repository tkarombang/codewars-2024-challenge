// WPU Coding Challenge 2024
// 68/366
// https://www.codewars.com/kata/55b42574ff091733d900002f

// function friend(friends) {
//   let result = [];
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].length == 4) {
//       result.push(friends[i]);
//     }
//   }
//   return result;
// }

// function friend(friends) {
//   let result = friends.filter(a => a.length === 4);
//   return result
// }

//ONELINER
const friend = (friends) => friends.filter((a) => a.length === 4);

console.log(friend(["Ryan", "Kieran", "Mark"]));
