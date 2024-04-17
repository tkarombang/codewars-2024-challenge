// WPU Coding Challenge 2024
// 34/366
// https://codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
  // if (bonus) {
  //   return `£${salary*10}`
  // } else {
  //   return salary
  // }

  if (bonus) {
    return '\u00A3' + (salary * 10).toString()
  } else {
    return '\u00A3' + salary.toString()
  }
  // return `\u00A3${bonus ? salary * 10 : salary}`
}

console.log(bonusTime(10000, true))