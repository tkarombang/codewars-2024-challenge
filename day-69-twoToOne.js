// WPU Coding Challenge 2024
// 69/366
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

// function twoToOne(s1, s2) {
//   let result = [];
//   let combine = s1 + s2;
//   const urutan = combine.split("").sort();
//   console.log(urutan);
//   for (let i = 0; i < urutan.length; i++) {
//     if (urutan[i] !== urutan[i + 1]) {
//       result.push(urutan[i]);
//     }
//   }
//   console.log(result.join(""));
//   return result.join("");
// }

// const twoToOne = (s1, s2) => [...new Set(s1+s2)].sort().join("")

function twoToOne(s1, s2) {
  let result = [];
  let combine = s1.concat(s2);
  let array = combine.split("").sort();

  for (let i = 0; i <= array.length; i++) {
    console.log(array[i]);
    if (!result.includes(array[i])) {
      result.push(array[i]);
    }
  }
  console.log(result.join(""));
}

// aretheyhereyestheyarehere
// aretheyhereyestheyarehere
console.log(twoToOne("aretheyhere", "yestheyarehere"));
