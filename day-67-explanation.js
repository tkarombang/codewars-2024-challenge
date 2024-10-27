// WPU Coding Challenge 2024
// 67/366
// https://www.codewars.com/kata/55f2b110f61eb01779000053

// function getSum(a, b) {
//   //Good luck!
//   let theBig = 0;
//   let theSmall = 0
//   if (a === b) {
//     return a;
//   }else if(a > b){
//     theBig = a
//     theSmall = b
//   }else if(b > a){
//     theBig = b
//     theSmall = a
//   }
//   let result = 0;
//   for(let i = theSmall; i <= theBig; i++){
//     result += i;
//   }
//   return result;
// }

function getSum(a, b) {
  //Good luck!
  // let theBig = Math.max(a, b);
  // let theSmall = Math.min(a, b);
  // let result = 0;
  // for (let i = theSmall; i <= theBig; i++) {
  //   result += i;
  // }
  // return result;

  let theBig = Math.max(a, b),
    theSmall = Math.min(a, b);
  return ((theBig - theSmall + 1) * (theSmall + theBig)) / 2;
}
console.log(getSum(5, -1));
