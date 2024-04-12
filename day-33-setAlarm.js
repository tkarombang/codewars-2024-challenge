// WPU Coding Challenge 2024
// 33/366
// https://www.codewars.com/kata/568dcc3c7f12767a62000038/

function setAlarm(employed, vacation) {

  // if((employed == true) && (vacation == true)){
  //   return false
  // }else if ((employed == false) && (vacation == false)){
  //   return false
  // }else if((employed == true) && (vacation == false)){
  //   return true
  // }else {
  //   return false
  // }

  // if(employed){
  //   if(vacation){
  //     return false
  //   }else{
  //     return true
  //   }
  // }else{
  //   if(vacation){
  //     return false
  //   }else{
  //     return true
  //   }
  // }

  console.log(!vacation)
  return employed && !vacation;
}
console.log(setAlarm(false, false))

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false