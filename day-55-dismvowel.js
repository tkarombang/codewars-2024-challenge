// WPU Coding Challenge 2024
// 55/366
// https://www.codewars.com/kata/52fba66badcd10859f00097e

// function disemvowel(str) {
//   let vowels = "";
//   for (let i = 0; i < str.length; i++) {
//     const toCase = str[i].toUpperCase();
//     if (toCase !== "O" && toCase !== "E" && toCase !== "I" && toCase !== "U" && toCase !== "A") {
//       vowels += str[i];
//     }
//   }
//   return vowels;
// }

const disemvowel = (str) => {
  // return str.split('').filter(e => e !== "O").join('')
  // console.log(str.replace(/[aiueoAIUEO]/g, ''))

  let vowels = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    console.log("AIUEOaiueo".includes(char));
    if ("AIUEOaiueo".includes(char)) {
      vowels += char;
    }
  }
  return vowels;
};

console.log(disemvowel("This website is for losers LOL!"));
