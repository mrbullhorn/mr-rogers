function countUp(userInput) {
  let ourNum = parseInt(userInput)
  if (isNaN(ourNum)) {
    return "Please Enter a Number.";
  } else {
  const ourArray = []
  for (index = 0; index <= ourNum; index += 1) {
    ourArray.push(0 + index);
  } 
return ourArray;
  }
}

