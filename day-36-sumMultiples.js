function sumMultiples(limit){
  let sum = 0;
  for(let i = 0; i < limit; i++){
    console.log(i)
    if( i % 7 === 0 || i % 3 === 0) {
      sum += i;
      console.log(sum)
    }
  }
  return sum
}

console.log(sumMultiples(20))