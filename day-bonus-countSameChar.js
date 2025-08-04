function countSameChar(str) {
  let memperkecil = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i])
    console.log(str[i + 1])
    if (str[i] === str[i + 1]) {
      count++
    } else {
      memperkecil += str[i];
      if (count > 1) {
        memperkecil += count;
      }
      count = 1;
    }
  }
  return memperkecil;
}

console.log(countSameChar("aabccdddde"))


