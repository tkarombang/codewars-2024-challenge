// function deretBilanganMenurun(sampleInput) {
//   let hasil = [];
//   if (sampleInput % 2 === 0){
//     sampleInput -= 1;
//   }
//   for (let i = sampleInput; i >= 1; i -= 2) {
//     if (hasil.length % 2 === 0) {
//       hasil.push(i.toString());
//     } else {
//       hasil.push('x');
//     }
//   }
//   return hasil;
// }
// console.log(
//   deretBilanganMenurun(12));

//MENCARI HURUF VOKAL
// function mencariHurufVokal(sampleInput){
//   const vokal = 'aiueoAIUEO';
//   let result = "";
//   const split = sampleInput.split('')
//   for(let i = 0; i < split.length; i++){
//     if(vokal.includes(sampleInput[i])){
//       result += sampleInput[i];
//     }
//   }
//   return result;
// }
// console.log(mencariHurufVokal(
//   "Indonesia Raya"))

//MENENTUKAN GANJIL GENAP DARI JUMLAH KARAKTER
// function ganjilGenapJumlahKarakter(sampleInput){
//  if (sampleInput.length % 2 === 0){
//   return "Genap";
//  }else{
//   return "Ganjil"
//  }
// }
// console.log(
//   ganjilGenapJumlahKarakter("Si Cantik")
// )

//GANTI HURUF VOKAL DENGAN ANGKA
// function menggantiHurufVokalAngka(sampleInput) {
//   let result = "";
//   for (let i = 0; i < sampleInput.length; i++) {
//     if (sampleInput[i] === "A" || sampleInput[i] === "a") {
//       result += "1";
//     } else if (sampleInput[i] === "I" || sampleInput[i] === "i") {
//       result += "2";
//     } else if (sampleInput[i] === "U" || sampleInput[i] === "u") {
//       result += "3";
//     } else if (sampleInput[i] === "E" || sampleInput[i] === "e") {
//       result += "4";
//     } else if (sampleInput[i] === "O" || sampleInput[i] === "o") {
//       result += "5";
//     } else {
//       result += sampleInput[i];
//     }
//   }
//   console.log(result);
//   return result;
// }
// console.log(menggantiHurufVokalAngka("Indonesia Raya"));

//MEMBALIKKAN KATA-KATA
// function membalikkanKata(sampleInput){
//   return sampleInput.split(' ')
//   .map(a => a.split('').reverse().join(''))
//   .reverse()
//   .join(' ');
// }
// console.log(
//   membalikkanKata("Indonesia Raya")
// )

// function membalikkanKata(sampleInput) {
//   let kataArray = sampleInput.split(" ");
//   console.log(kataArray);
//   for (let i = 0; i < kataArray.length; i++) {
//     kataArray[i] = kataArray[i].split("").reverse().join("");
//   }
//   return kataArray.reverse().join(" ");
// }
// console.log(membalikkanKata("Indonesia Raya"));

//
