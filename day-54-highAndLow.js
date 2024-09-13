// WPU Coding Challenge 2024
// 54/366
// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(str) {
  const numb = str.split(" ");

  let min = Number(numb[0]);
  let max = Number(numb[0]);

  for (let i = 0; i < numb.length; i++) {
    console.log(Number(numb[i]));

    const convertToNumb = Number(numb[i]);
    if (convertToNumb < min) min = convertToNumb;
    if (convertToNumb > max) max = convertToNumb;
  }
  console.log(`${max} ${min}`);
  return `${max} ${min}`;
}

// function highAndLow(str) {

//   const numb = str.split(' ')
//   console.log(Math.min(...numb))
//   console.log(Math.max(...numb))
// }

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
