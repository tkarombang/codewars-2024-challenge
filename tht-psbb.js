// Total Fam 5
// Member Setiap Fam 1 2 4 3 3
// function psbb(totFamily, memberFamily) {
//   let totBus = 0;
//   const member = memberFamily.split(" ").map(Number);

//   for (let i = 0; i < totFamily; i++) {
//     let busCapacity = 4;
//     for (let j = i; j < totFamily && busCapacity >= member[i]; j++) {
//       busCapacity -= member[j];
//       i = j;
//     }
//     totBus++;
//     console.log(totBus)
//   }
//   console.log(totBus);
//   return totBus;
// }

// function psbb(totFam, memberFamily) {
//   let totBus = 0;
//   const member = memberFamily.split(" ").map(Number);
//   let i = 1;
//   while (i < totFam) {
//     let busCapacity = 4;
//     let j = i;
//     while (j < totFam && busCapacity >= member[j]) {
//       busCapacity -= member[j];
//       j++;
//     }
//     totBus++;
//     i = j;
//   }
//   console.log(totBus);
// }

function psbb(totFam, memberFam) {
  let totBus = 0;
  const member = memberFam.split(" ").map(Number);

  for (let i = 0; i < totFam; i++) {
    let busCapacity = 4;
    for (let j = i; j < totFam && busCapacity >= member[i]; j++) {
      busCapacity -= member[j];
      i = j;
    }
    totBus++;
    console.log(totBus);
  }
  console.log(totBus);
  return totBus;
}

console.log(psbb(8, "2 3 4 4 2 1 3 1"));
console.log(psbb(5, "1 2 4 3 3"));
console.log(psbb(3, "1 2 3"));
