// WPU Coding Challenge 2024
// 39/366
// https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

// function switchItUp(number) {
// if(number === 1) number = "One"
// if(number === 2) number = "Two"
// if(number === 3) number = "Three"
// if(number === 4) number = "Four"
// if(number === 5) number = "Five"
// if(number === 6) number = "Six"
// if(number === 7) number = "Seven"
// if(number === 8) number = "Eight"
// if(number === 9) number = "Nine"

// return number

//   switch (number) {
//     case 0:
//       return "Zero";
//     case 1:
//       return "One";
//     case 2:
//       return "Two";
//     case 3:
//       return "Three";
//     case 4:
//       return "Four";
//     case 5:
//       return "Five";
//     case 6:
//       return "Six";
//     case 7:
//       return "Seven";
//     case 8:
//       return "Eigh";
//     case 9:
//       return "Nine";
//   }
// }

// const switchItUp = (number) => {
//   return {
//     0: "Zero",
//     1: "One",
//     2: "Two",
//     3: "Three",
//     4: "Four",
//     5: "Five",
//     6: "Six",
//     7: "Seven",
//     8: "Eight",
//     9: "Nine",
//   }[number];
// };

const switchItUp = (number) => ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number];
console.log(switchItUp(1));
