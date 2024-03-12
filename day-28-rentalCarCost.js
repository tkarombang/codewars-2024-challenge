// WPU Coding Challenge 2024
// 28/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// function rentalCarCost(d) {
//   const dailyRate = 40;
//   let totalCost = d * dailyRate;
// console.log(totalCost)
// if (d >= 7) {
//   totalCost -= 50
// } else if (d >= 3) {
//   totalCost -= 20
// }
// return totalCost
//   return d >= 7 ? totalCost -= 50 : d >= 3 ? totalCost - 20 : totalCost
// }

// function rentalCarCost(d){
//   let payoff = 0;
// if ( d >= 7 ){
//   payoff = 50;
// }else if ( d >= 3){
//   payoff = 20;
// }
// return d * 40 - payoff
// }

function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0)
}

console.log(rentalCarCost(1))