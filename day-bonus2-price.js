function price(good, cheap, fast) {
  // let result = '';
  // if ((!good) && (!cheap) && (!fast)) {
  //   return result += 'chose the optional';
  // } else if ((good) && (cheap) && (fast)) {
  //   return result += 'SORRY, select another';
  // } else if ((good === true) && (cheap === true)) {
  //   return result += 'Good = ok, Cheap = ok, But NOT Fast'
  // } else if ((good === true) && (fast === true)) {
  //   return result += 'Good = ok, Fast = ok, But NOT Cheap'
  // } else if ((cheap === true) && (fast === true)) {
  //   return result += 'Cheap = ok, Fast = Ok, But NOT Good'
  // }


  if ((good) && (cheap) && (fast)) {
    return 'select again'
  } else {
    if ((!good) && (cheap) && (fast)) {
      return 'TIDAK BAGUS ' + good
    } else if ((good) && (!cheap) && (fast)) {
      return 'TIDAK MURAH ' + cheap
    } else if ((good) && (cheap) && (!fast)) {
      return 'TIDAK CEPAT ' + fast
    }
  }

}

console.log(price(false, true, true))