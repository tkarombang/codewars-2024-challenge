// WPU Coding Challenge 2024
// 10/366
// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d


// function stringToArray(string) {
// return string.split(' ')

// }

const stringToArray = (string) => string.split(' ');
console.log(stringToArray('My Name is Azwar and I am not terorrist'));

function string(str){
  return str.split(' ').slice(3).join(" ");
}

console.log(string("Saya sedang Live Test Code dengan mitech"))