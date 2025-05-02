function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
// console.log(isPrime(36))

function cetakBilanganPrima(n) {
  const bilangan = []
  let current = 2
  while (bilangan.length < n) {
    if (isPrime(current)) bilangan.push(current)
    current++
  }

  // loop untuk mencetak baris
  // for (let i = 1; i < bilangan.length; i++) {
  //   console.log(bilangan.slice(0, i).join(" "))
  // }

  // loop untuk mencetak baris sekaligus di kalikan
  for (let i = 1; i <= bilangan.length; i++) {
    const nilaiArr = bilangan.slice(0, i)
    const multipleArr = nilaiArr.reduce((acc, curr) => acc * curr, 1)
    console.log(nilaiArr.join(" X ") + " = " + multipleArr)
  }
}
cetakBilanganPrima(5)