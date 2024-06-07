// WPU Coding Challenge 2024
// 35/366
// Looping Collections

let angka = 10;
let i = 0;
let genap = 20;

for (let i = 1; i <= angka; i++) {
  console.log(i);
}

while (i <= angka) {
  console.log(i);
  i++;
}

for (let i = 0; i <= genap; i++) {
  if (i % 2 == 0) {
    console.log(i);
  } else {
    console.log(i);
  }
}

let l = 0;
while (l <= genap) {
  if (l % 2 !== 0) {
    console.log(l);
  } else {
    console.log(l);
  }
  l++;
}

//buatlah program menggunakan loop for dengan ketentuan sebagai berikut
// inputan : {11,22,33,44,55,66,77,88,99}
// output yang diharapkan : -*22*44*66*88*-

function getArr(num) {
  const str = "-*";
  return `-*${num.filter((num) => num % 2 == 0).join("*")}*-`;
}

function getArr2(val) {
  return (
    val.reduce((acc, curr) => {
      if (curr % 2 === 0) {
        return acc + "*" + curr.toString();
      }
      return acc;
    }, "-") + "*-"
  );
}
console.log(getArr([11, 22, 33, 44, 55, 66, 77, 88, 99]));
console.log(getArr2([11, 22, 33, 44, 55, 66, 77, 88, 99]));
