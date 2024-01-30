// WPU Coding Challenge 2024
// 4/366
// https://www.codewars.com/kata/53dc23c68a0c93699800041d

// function smash (words){
//   return words.join(' ');
// }

// const smash = (words) => words.join(' ');

function smash(words) {
  let hasil = '';
  for (let i = 0; i < words.length; i++) {
    hasil += words[i];
    if (words.length > i + 1) hasil += ' ';
  }

  return hasil;
}

console.log(smash(['hello', 'word', 'this', 'is', 'great']))