// WPU Coding Challenge 2024
// 53/366
// https://www.codewars.com/kata/546e2562b03326a88e000020

// function squareDigits(num) {
// const result = [];
// const strNum = String(num).split("");
// for (let i = 0; i < strNum.length; i++) {
//   const num = Number(strNum[i]);
//   result.push(Math.pow(num, 2));
// }
// return Number(result.join(""));

//   const split = num.toString().split('').map(digit => Math.pow(digit, 2)).join('')
//   console.log(parseInt(split))
//   return parseInt(split)
// }

// const squareDigits = (num) => {
//   const conv = num
//     .toString()
//     .split("")
//     .map((i) => i * i)
//     .join("");
//   return parseInt(conv);
// };

function squareDigits(num) {
  return Number(
    ("" + num)
      .split("")
      .map((i) => i * i)
      .join(""),
  );
}
console.log(squareDigits(3212));
