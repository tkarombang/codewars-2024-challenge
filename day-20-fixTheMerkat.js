// WPU Coding Challenge 2024
// 20/366
// https://www.codewars.com/kata/56f699cd9400f5b7d8000b55/

function fixTheMeerkat(arr) {
  let start = 0;
  let end = arr.length - 1;
  console.log(end)
  for (let i = 0; i < end; i++) {
    let temp = arr[i]
    arr[start] = arr[end]
    arr[end] = temp
    arr
    return arr
  }
  console.log(arr)
  return arr.reverse()

  // let tail = arr[0];
  // arr[0] = arr[2]
  // arr[2] = tail
  // return arr
}

console.log(fixTheMeerkat(["tail", "body", "head"]))