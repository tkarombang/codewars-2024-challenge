function gangenJumKarakter(str) {
  const splitChar = str.split(' ')
  console.log(splitChar.length)
  console.log(splitChar.join(''))
  if (splitChar.length % 2 === 0) {
    return "Genap"
  } else {
    return "Ganjil"
  }
}
gangenJumKarakter("Si Cantik")
console.log(gangenJumKarakter("Si Cantik"))
