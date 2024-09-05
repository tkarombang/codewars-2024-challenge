// function cariElement(n) {
//   const el = [1, 2, 5, 10, 40];
//   for (let i = 0; i < el.length; i++) {
//     console.log(el[i]);
//     if (el[i] == n) {
//       console.log(el[i]);
//       console.log("indeks ke-" + i);
//       return el[i];
//     }
//   }
//   return "Element tidak ditemukan";
// }

function cariElement(n, target) {
  for (let i = 0; i < target.length; i++) {
    console.log(el[i]);
    if (el[i] == n) {
      console.log(el[i]);
      console.log("indeks ke-" + i);
      return el[i];
    }
  }
  return "Element tidak ditemukan";
}
const el = [1, 2, 5, 10, 40];
const n = 5;
console.log(cariElement(n, el));

// let total = 0;
// for(let i=0; i <= 5; i++){
//   if(i % 2 == 0){
//     total +=10
//   }else{
//     total -=5
//   }
// }
// console.log(total)
