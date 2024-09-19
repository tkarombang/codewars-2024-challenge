// WPU Coding Challenge 2024
// 58/366
// https://www.codewars.com/kata/56747fd5cb988479af000028

function getMiddle(str) {
  let middle = str.length / 2;
  let result = "";
  console.log(middle);
  // if(str.length % 2 == 0) {
  //   console.log(str[middle - 1] + str[middle])
  // }else {
  //   console.log(str[Math.floor(middle)])
  // }
  // return result = str.length % 2 == 0 ? str[middle - 1] + str[middle] : str[Math.floor(middle)]
  // console.log(str.substr(Math.floor(middle), str.length % 2 === 0 ? 2 : 1))
  // return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1)

  console.log(str.length);
  return str.slice((str.length - 1) / 2, str.length / 2 + 1);
}

console.log(getMiddle("testing"));
