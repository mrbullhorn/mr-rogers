# The Mr. Rogers Experience

#### By _**Hans Ellis**_

#### _This a project to demonstrate my understanding of loops and branching._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_

## Description

This webpage requests a number from the user. It will display all numbers from 0 to the specified number while replacing any number containing the number "1" with the word "Beep!". The number "2" is replaced with "Boop!" and the number "3" is replaced with "Won't you be my Neighbor." If the user enters a string or the form is empty the user will be prompted to please enter a number. If the user enters a number greater than 100,000 they will be prompted to calm down.

## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top level of the directory_
* _Open index.html in your browser_
* _Make selections and click "Submit"_

## Known Bugs

* _no known bugs at this time_


## License

MIT License

Copyright (c) [2022] [Hans Ellis]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.





**Decsribe : countUp()**
***

**Test 1**: "It should convert the value entered to a number."<br>
```javascript
Code: CountUp("5");
```
Expected output: 5

**Test 2**: "It should return an array of numbers from 0 to the users inputted number."
```javascript
Code: countUp(5);
```
Expected output: [0,1,2,3,4,5]

**Test 4:** "It should send a message when a string or other value is entered."
```javascript
Code: countUp("hans");
```
Expected output: "Please Enter a Number."


**Test 5:** "It should return an array with the number '1' replaced with the string 'Beep!'".
```javascript
Code: countUp(5);
```
Expected output: "[0,'Beep!', 2,3,4,5]

**Test 6:** "It should return an array with the number '1' replaced with the string 'Beep!' and the number '2' replaced with the string 'Boop!'".
```javascript
Code: countUp(5);
```
Expected output: "[0,'Beep!', 'Boop!' ,3,4,5]"

**Test 7:** "It should return an array with the number '1' replaced with the string 'Beep!' and the number '2' replaced with the string 'Boop!' and the number '3' replaced with the string 'Won't you be my neighbor?'"
```javascript
Code: countUp(5);
```
Expected output: "[0,'Beep!, 'Boop!','Won't you be my neighbor?',4,5]"

