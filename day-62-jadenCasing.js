// WPU Coding Challenge 2024
// 62/366
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

function toJadenCase(str) {
  // return str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  let result = "";
  const words = str.split(" ");
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    if(i < words.length - 1){
      result += ' '
    }


  }
  console.log(result);
  return result;
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));
