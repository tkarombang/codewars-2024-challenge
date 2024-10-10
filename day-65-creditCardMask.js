// WPU Coding Challenge 2024
// 65/366
// https://www.codewars.com/kata/5412509bd436bd33920011bc
function maskify(cc) {
  let mask = "";
  for (let i = 0; i < cc.length - 4; i++) {
    mask += "#";
  }
  // console.log(mask += cc.slice(-4))
  return (mask += cc.slice(-4));
}

console.log(maskify("4556364607935616"));
