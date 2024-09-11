// WPU Coding Challenge 2024
// 52/366
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  // const vowe = [];
  // console.log(str.length);
  // // const arrStr = Array(...str)
  // for (let i = 0; i < str.length; i++) {
  //   console.log(str[i] === "a");
  //   if (str[i] === "a") {
  //     // console.log(vowe.push(str[i]));
  //     vowe.push(str[i]);
  //   }
  // }
  // return vowe.length;
  // const vowe = [];
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === "a") {
  //     vowe.push(str[i]);
  //   }else if (str[i] === "i") {
  //     vowe.push(str[i]);
  //   }else if (str[i] === "u") {
  //     vowe.push(str[i]);
  //   }else if (str[i] === "e") {
  //     vowe.push(str[i]);
  //   }else if (str[i] === "o") {
  //     vowe.push(str[i]);
  //   }
  // }
  // return vowe.length;
  // const strArr = Array(...str)
  // return strArr.filter(el => el === 'a').length

  // let vowelCount = 0;
  // const vowels = ["a", "i", "u", "e", "o"];
  // for (let i = 0; i < str.length; i++) {
  //   for (let j = 0; j < vowels.length; j++) {
  //     if (str[i] === vowels[j]) {
  //       vowelCount++;
  //     }
  //   }
  // }
  // return vowelCount;

  return str.split("").filter((c) => "aiueoAIUEO".includes(c)).length;
}

console.log(getCount("pear tree"));
