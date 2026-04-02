//Part 1
// Create a new Date object that stores the current date and time.
const today = new Date();

// Get the current month from the Date object.
// getMonth() starts at 0 for January, so add 1.
// String() turns the number into text so padStart() can be used.
// padStart(2, "0") makes sure the month always has 2 digits.
const month = String(today.getMonth() + 1).padStart(2, "0");
// Get the current day of the month.
// String() and padStart() make the day always 2 digits.
const day = String(today.getDate()).padStart(2, "0");
// Get the full 4-digit year.
const year = today.getFullYear();

// Display in correct format.
document.getElementById("today-date").textContent = `Today is ${month}/${day}/${year}`;












//Part 2
// Create four starting values.
const valueOne = "22"; // Two are strings that can become whole numbers.
const valueTwo = "22.22"; // One is a decimal string.
const valueThree = "picklesss"; // One is not a valid number.
const valueFour = "200"; // Two are strings that can become whole numbers.

// Convert each value using Number().
// If a value cannot be converted, JavaScript returns NaN.
const convertedOne = Number(valueOne);
const convertedTwo = Number(valueTwo);
const convertedThree = Number(valueThree);
const convertedFour = Number(valueFour);

// Show the original value, the converted value, whether it is NaN, and whether it is an integer.
document.getElementById("conversion-result-1").textContent =
    `Original value: "${valueOne}" → Converted: ${convertedOne} → isNaN: ${Number.isNaN(convertedOne)} → isInteger: ${Number.isInteger(convertedOne)}`;

document.getElementById("conversion-result-2").textContent =
    `Original value: "${valueTwo}" → Converted: ${convertedTwo} → isNaN: ${Number.isNaN(convertedTwo)} → isInteger: ${Number.isInteger(convertedTwo)}`;

document.getElementById("conversion-result-3").textContent =
    `Original value: "${valueThree}" → Converted: ${convertedThree} → isNaN: ${Number.isNaN(convertedThree)} → isInteger: ${Number.isInteger(convertedThree)}`;

document.getElementById("conversion-result-4").textContent =
    `Original value: "${valueFour}" → Converted: ${convertedFour} → isNaN: ${Number.isNaN(convertedFour)} → isInteger: ${Number.isInteger(convertedFour)}`;




//Part 3
// Create numeric values for a simple price calculator.
const itemPrice = 24.99;
const taxRate = 0.10;
const shippingCost = 5.50;

const subtotal = itemPrice + shippingCost; // Add item price and shipping cost.
const taxAmount = itemPrice * taxRate; // Multiply item price by the tax rate.
const totalCost = subtotal + taxAmount; // Add subtotal and tax amount for the final total.
const roundedTotal = totalCost.toFixed(2); // Format the final total to always show 2 decimal places.

// Display each math result on the page.
document.getElementById("math-result-1").textContent =
    `Item price: $${itemPrice.toFixed(2)}`

document.getElementById("math-result-2").textContent =
    `Shipping cost: $${shippingCost.toFixed(2)} / Subtotal: $${subtotal.toFixed(2)}`

document.getElementById("math-result-3").textContent =
    `Tax amount: $${taxAmount.toFixed(2)}`

document.getElementById("math-result-4").textContent =
    `Total cost: $${roundedTotal}`;



//Part 4
// Check whether valueThree became NaN after conversion.
if (Number.isNaN(convertedThree)) {
    document.getElementById("conversion-message").textContent =
        `The value "${valueThree}" is not a valid number after conversion.`;
} else {
    document.getElementById("conversion-message").textContent =
        `The value "${valueThree}" converted successfully into a number.`;
}



// Check whether the total cost is at least 30 dollars.
if (totalCost >= 30) {
    document.getElementById("math-message").textContent = "The total cost is $30.00 or more.";
} else {
    document.getElementById("math-message").textContent = "The total cost is less than $30.00.";
}



