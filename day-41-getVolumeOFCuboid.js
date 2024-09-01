// WPU Coding Challenge 2024
// 41/366
// https://www.codewars.com/kata/58261acb22be6e2ed800003a

// function getVolumeOfCuboid(length, width, height){
//   return result = length * (width * height)
// }

// console.log(getVolumeOfCuboid(6, 2, 5))

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}
const getVolumeOfCuboid = (l, w, h) => l * w * h;
console.log(getVolumeOfCuboid(6, 2, 5));
