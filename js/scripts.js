function countUp(userInput) {
  let ourNum = parseInt(userInput)
  const ourArray = []
  for (index = 0; index <= ourNum; index += 1) {
    ourArray.push(0 + index);
  } 
return ourArray;
}