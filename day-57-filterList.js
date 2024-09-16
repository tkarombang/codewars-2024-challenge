// WPU Coding Challenge 2024
// 57/366
// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/

// function filter_list(l) {
//   const str = l.map(Number)
//   const result = []
// for (let i = 0; i < l.length; i++){
//   if(l[i] === str[i]){
//     result.push(l[i])
//   }
// }
// return result
// }

const filter_list = (l) => {
  // return l.filter(v => typeof v == 'number')
  // return l.filter(e => Number.isInteger(e))
  return l.filter(Number.isInteger);
};

console.log(filter_list([1, 2, "a", "b"]));
