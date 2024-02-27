// WPU Coding Challenge 2024
// 19byMe/366
// https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036

function toCsvText(array) {
  let result = ''

  for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i != array.length - 1) {
      result += '\n'
    }
  }
  return result;
}


// let toCsvText = (array) => array.join('\n')
console.log(toCsvText([0, 1, 2, 3, 45],
  [10, 11, 12, 13, 14],
  [20, 21, 22, 23, 24],
  [30, 31, 32, 33, 34]))