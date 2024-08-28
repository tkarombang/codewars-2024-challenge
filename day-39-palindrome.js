// WPU Coding Challenge 2024
// 39/366
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrom(x) {
  return x.toLowerCase() === x.toLowerCase().split("").reverse().join("");
}

console.log(isPalindrom("hello"));
