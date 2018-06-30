function SecondFun(passedNumber) {
  let roundedNumber = Math.round(passedNumber);
  console.log("passed number ", passedNumber);
  let string = "";
  for (let i = 0; i <= roundedNumber; i++) {
    string += letter;
  }
  console.log(string);
  return string;
}

function numLetters(letter) {
  return new SecondFun("passedNumber", SecondFun());
}

numLetters("a")(4);
//
// let func = new SecondFun();
