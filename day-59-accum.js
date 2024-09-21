// WPU Coding Challenge 2024
// 59/366
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

function accum(str) {
  // let result = ""
  // for(let i = 0; i < str.length; i++){
  //   const upper = str[i].toUpperCase()
  //   console.log(
  //     upper + upper.toLowerCase().repeat((i + 1) - 1))
  //   console.log(i < str.length - 1)
  //   result += upper + upper.toLowerCase().repeat((i + 1) - 1)
  //   if(i < str.length - 1){
  //     console.log(1)
  //     result += '-'
  //   }
  // }
  // return result

  return str
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

console.log(accum("abcd"));
