// function fibo(n) {
//   let n1 = 1;
//   let n2 = 2;
//   let next = 0
//   for (let i = 0; i <= n; i++) {
//     next = n1 + n2
//     n1 = n2
//     n2 = next
//   }
//   return n1
// }

function fibo(n) {
  if (n <= 2) return n
  else return fibo(n - 1) + fibo(n - 2)
}
for (let i = 1; i <= 6; i++) {
  console.log(fibo(i))
}
