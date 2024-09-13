// Buatlah sebuah program yang menerima list of string atau string array sebagai inputan
// tampilkan kata pertama yang terpanjang dari string-string yang ada di dalam list atau array tersebut.
// Contoh:
// Jika input adalah ["halo dunia", "makan nasi goreng", "ini rumahnya budi"], maka outputnya adalah "makan".
// Perhatikan bahwa string "makan" memiliki panjang 5, sedangkan "halo" memiliki panjang 4 dan "ini" memiliki panjang 3.

// const kataTerpanjang = (arr) => {
//   return arr.map(item => {
//     const firstWord = item.split(' ')[0];
//     return firstWord;
//   }).reduce((longest, current) => {
//     return current.length > longest.length ? current : longest;
//   }, "");
// };

// function kataTerpanjang(arr) {
//   let terpanjang = "";
//   for (let i = 0; i < arr.length; i++) {
//     const kataPertama = arr[i].split(" ")[0];
//     console.log(terpanjang.length);
//     console.log(kataPertama.length);
//     if (kataPertama.length > 0) {
//       terpanjang = kataPertama;
//     }
//   }
//   return terpanjang;
// }

const kataTerpanjang = (arr) => {
  return arr
    .map((el) => {
      const kataPertama = el.split(" ")[0];
      return kataPertama;
    })
    .reduce((acc, curr) => {
      return acc.length > curr.length ? acc : curr;
    }, "");
};

console.log(kataTerpanjang(["halo dunia", "makan nasi goreng", "ini rumahnya budi"]));
