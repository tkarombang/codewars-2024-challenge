// 11 'x' 7 'x' 3 'x'.... 

function deretMenurun(sample) {
  let hasil = []
  if (sample % 2 === 0) {
    sample -= 1
  }
  for (let i = sample; i >= 1; i -= 2) {
    if (hasil.length % 2 === 0) {
      hasil.push(i.toString())
    } else {
      hasil.push('x')
    }
  }
  console.log(hasil.length)
  console.log(hasil)
}

deretMenurun(12)
