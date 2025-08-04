// function ganjil(n) {
//   let result = []
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 1) {
//       console.log(i)
//       result.push(i)
//     }
//   }
//   return result
// }
// console.log(ganjil(10))

// 12345678910
// 123456789
// 12345678
// 1234567
// 123456
// 12345
// 1234
// 123
// 12
// 1
// function angka(n) {
//   for (let i = n; i >= 1; i--) {
//     let result = ''
//     for(let j = 1; j <= i; j++){
//       result += j
//     }
//     console.log(result)
//   }
// }
// console.log(angka(10))

function barisAngka(n) {
  let hasil = ''
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      hasil += j
    }
    hasil += '\n'
  }
  console.log(hasil)
}

barisAngka(10)

// function bersarang(n) {
//   let bintang = ''
//   for (let i = n; i >= 0; i--) {
//     for (let j = 0; j < i; j++) {
//       bintang += '*'
//     }
//     bintang += '\n'
//   }
//   console.log(bintang)
// }
// bersarang(5)