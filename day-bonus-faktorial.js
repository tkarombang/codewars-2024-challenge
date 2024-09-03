// function hitungFaktorial(n) {
//   console.log(n);
//   if (n === 0){
//     return 1
//   }
//   return n * hitungFaktorial(n - 1);
// }
// console.log(hitungFaktorial(5))

function hitungFaktorial(n) {
  let hasil = 1;
  for (let i = n; i > 0; i--) {
    hasil *= i;
  }
  return hasil;
}

console.log(hitungFaktorial(5));
