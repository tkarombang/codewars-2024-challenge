// WPU Coding Challenge 2024
// 64/366
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// function dnaStrand(dna){
//   let result = ""
//   for (let i = 0; i < dna.length; i++){
//     if(dna[i] === "A") result += "T"
//     if(dna[i] === "T") result += "A"
//     if(dna[i] === "C") result += "G"
//     if(dna[i] === "G") result += "C"
//   }
//   return result
// }
// function dnaStrand(dna) {
//   return dna
//     .split("")
//     .map((a) => (a == "A" ? "T" : a == "T" ? "A" : a == "C" ? "G" : a === "G" ? "C" : null))
//     .join("");
// }
function dnaStrand(dna) {
  let result = "";
  let dnaKeys = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  for (let i = 0; i < dna.length; i++) {
    let char = dna[i];
    console.log(dnaKeys[char]);
    result += dnaKeys[char];
  }
  return result;
}

console.log(dnaStrand("ATTGC"));
