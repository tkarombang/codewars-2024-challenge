function cariHurufVocal(str) {
  const splitStr = str.split('')
  const vocal = 'aiueoAIUEO'
  let result = "";
  for (let i = 0; i < splitStr.length; i++) {
    console.log(vocal.includes(str[i]))
    if (vocal.includes(str[i])) {
      console.log(str[i])
      result += str[i]
    }
  }
  console.log(result)
  return result

}
cariHurufVocal("Indonesia Raya")
console.log(cariHurufVocal("Indonesia Raya"))