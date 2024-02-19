// WPU Coding Challenge 2024
// 17/366
// https://www.codewars.com/kata/5ab6538b379d20ad880000ab

// const areaOrPerimeter = function(l , w) {
//  let result = 0;
//  if (l === w){
//    result = l * w;
//  }else {
//   result = (l * 2) + (w * 2);
//  }
//  return result
// };

const areaOrPerimeter = (l, w) => (l === w) ? l * w : 2 * (l + w);
console.log(areaOrPerimeter(6, 10))