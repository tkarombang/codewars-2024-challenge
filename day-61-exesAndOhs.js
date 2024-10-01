// WPU Coding Challenge 2024
// 61/366
// https://www.codewars.com/kata/55908aad6620c066bc00002a

// function XO(str) {
//   //code here
//   const char = str.toLowerCase();
//   let oCount = 0;
//   let xCount = 0;
//   console.log(char);
//   for (let i = 0; i < char.length; i++) {
//     console.log(char[i] == char[i + 1]);
//     if (char[i] === "o") {
//       oCount++;
//     } else if (char[i] === "x") {
//       xCount++;
//     }
//   }
//   return xCount === oCount;
// }

const XO = (str) => {
  str = str.toLowerCase();
  return str.split("x").length === str.split("o").length;
  // return str.filter((x) => x === "x").length === str.filter((o) => o === "o").length;
};

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp")); // when no 'x' and 'o' is present should return true
console.log(XO("zzoo"));
