// WPU Coding Challenge 2024
// 61/366
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// function isIsogram(str) {
//   str = str.toLowerCase();
//   let charMap = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (charMap[char]) {
//       return false;
//     }
//     charMap[char] = true;
//   }
//   return true;
// }

// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length
// }

function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      if (str[i] === str[j + 1]) {
        return false;
      }
    }
  }
  return true;
}
// isIsogram("Dermatoglyphics")
console.log(isIsogram("aku"));
