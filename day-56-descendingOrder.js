// WPU Coding Challenge 2024
// 56/366
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// function descendingOrder(n) {
//   const strNum = Array(...n.toString());
//   const num = strNum.sort().reverse().join("");
//   return Number(num);
// }
function descendingOrder(n) {
  // return Number(Array(...n.toString()).sort().reverse().join(''))
  // return parseInt(String(n).split('').sort().reverse().join(''))
  return parseInt(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join(""),
  );
}

console.log(descendingOrder(1021));
