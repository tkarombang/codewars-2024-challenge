// WPU Coding Challenge 2024
// 14/366
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/

// RULES
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// function getGrade(s1, s2, s3) {
//   let score = (s1 + s2 + s3) / 3;
//   console.log(score);
//   if (score < 60) return 'F'
//   if (score < 70) return 'D'
//   if (score < 80) return 'C'
//   if (score < 90) return 'B'
//   return 'A'
// }

function getGrade(...s) {
  let score = s.reduce((acc, curr) => acc + curr) / s.length
  console.log(score);

  return score < 60 ? 'F' : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A'
  // if (score < 60) return 'F'
  // if (score < 70) return 'D'
  // if (score < 80) return 'C'
  // if (score < 90) return 'B'
  // return 'A'
}
console.log(getGrade(80, 90, 90))