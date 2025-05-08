function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true
}
console.log(isPrime())

function cetakPrime(line) {
  let bil = []
  let current = 2;
  while (bil.length < line) {
    if (isPrime(current)) bil.push(current)
    current++
  }

  for (let i = 1; i < bil.length; i++) {
    console.log(bil.slice(0, i).join(" "))
  }

  // for (let i = 1; i < bil.length; i++) {
  //   const primeArr = bil.slice(0, i)
  //   const multiplePrime = primeArr.reduce((acc, curr) => acc * curr)
  //   console.log(primeArr.join(" x ") + " = " + multiplePrime)
  // }
}

cetakPrime(5)