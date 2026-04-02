# comp484-hw9
1. A list of the built-in objects and methods you used
built-in objects:
Date
Number
String
document

Methods:
getMonth()
getDate()
getFullYear()
padStart()
isNaN()
isInteger()
toFixed()
getElementById()

2. Your **GitHub Pages link**
https://talinkeshesh.github.io/comp484-hw9/

3. Path to a screenshot file of the finished webpage
Done

4. A short reflection of **4-5 sentences** that answers:
   - What part was easiest?
   - What part was hardest?
   - What did you learn about the `Date` object?
   - What did you learn about the `Number` object?
   - What did you learn about displaying results in the browser?

Assuming in JavaScript, the easiest part for me was displaying the date and writing the results onto the page using document.getElementById() and textContent. The hardest part for me was keeping track of the prices with the different numbers and conversions. About the `Date` object, I learned that the Date object can get the current date from the browser, and that I can use methods like getMonth(), getDate(), and getFullYear() to separate the month, day, and year. I also learned that getMonth() starts at 0, so I have to add 1. About the `Number` object, I learned that Number() can convert strings into numbers, but if the value cannot be converted, it becomes NaN. I also learned that Number.isNaN() checks whether the result is not a real number, and Number.isInteger() checks whether the converted value is a whole number. About displaying results in the browser, I learned that JavaScript can place results directly on the webpage by selecting HTML elements and updating their textContent. This makes the page interactive and lets the user see the output in the browser instead of only in the console.

Citations:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById