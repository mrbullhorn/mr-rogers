function countUp(userInput) {
  let ourNum = parseInt(userInput)
  if (isNaN(ourNum)) {
    return "Please Enter a Number.";
  } else {
  const ourArray = []
  for (index = 0; index <= ourNum; index += 1) {
    ourArray.push(0 + index);
    
  }
  ourArray.forEach(function(number) {
      stringNum = number.toString()
      if (stringNum.includes(1)) {
      ourArray.splice(stringNum,  1, "Beep!")
      }
    });
  return ourArray;
  }
}

//experimental

function countUp(userInput) {
  let ourNum = parseInt(userInput)
  if (isNaN(ourNum)) {
    return "Please Enter a Number.";
  } else {
  const ourArray = []
  for (index = 0; index <= ourNum; index += 1) {
    ourArray.push(0 + index);
    
  }
  ourArray.forEach(function(number) {
      stringNum = number.toString();
      
      if (stringNum.includes(3)) {
        ourArray.splice(stringNum, 1, "Won't you be my neighbor?");
      } else if (stringNum.includes("2")) {
        ourArray.splice(stringNum, 1, "Boop!");
      } else (stringNum.includes("1")) {
      ourArray.splice(stringNum,  1, "Beep!");
      }
    });
  return ourArray;
  }
}