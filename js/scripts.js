//business logic
function countUp(userInput) {
  let ourNum = userInput
  const ourArray = []
  for (index = 0; index <= ourNum; index += 1) {
    ourArray.push(0 + index);
  }
  ourArray.forEach(function(number) {
      stringNum = number.toString();
      if (stringNum.includes("3")) {
        ourArray.splice(stringNum, 1, "Won't you be my neighbor?");
      } else if (stringNum.includes("2")) {
        ourArray.splice(stringNum, 1, "Boop!");
      } else if (stringNum.includes("1")) {
      ourArray.splice(stringNum,  1, "Beep!");
      }
    });
  return ourArray;
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const theInput = document.getElementById("theOnlyInput").value;
    theNumber = parseInt(theInput);
    if (isNaN(theNumber) || theNumber === "") {
      document.querySelector("span#output").innerText = "Please Enter a Number.";
      } else if (theNumber > 100000 ) {
        document.querySelector("span#output").innerText = "Easy there turbo.";
      } else {
    finalArray = countUp(theNumber);
    printText = finalArray.join(", ");
    document.querySelector("span#output").innerText = printText;
    }
  });
});
