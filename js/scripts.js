//business logic
function countUp(userInput) {
  let ourNum = userInput
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
      } else if (stringNum.includes("1")) {
      ourArray.splice(stringNum,  1, "Beep!");
      }
    });
  return ourArray;
}


//////


window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const theNumber = document.getElementById("theOnlyInput").value;

    if (isNaN(theNumber)) {
      let errMsg = "Please Enter a Number.";
      document.querySelector("span#hide-me").innerText = errMsg;
      }
    finalArray = countUp(theNumber);
    printText = finalArray.join(", ");
    document.querySelector("span#hide-me").innerText = printText;
    
  
  })
});

  