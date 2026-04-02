//Part 1
const today = new Date();

const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const year = today.getFullYear();

document.getElementById("today-date").textContent = `Today is ${month}/${day}/${year}`;



//Part 2
const valueOne = "22";
const valueTwo = "22.22";
const valueThree = "picklesss";
const valueFour = "200";

const convertedOne = Number(valueOne);
const convertedTwo = Number(valueTwo);
const convertedThree = Number(valueThree);
const convertedFour = Number(valueFour);

document.getElementById("conversion-result-1").textContent =
    `Original value: "${valueOne}" → Converted: ${convertedOne} → isNaN: ${Number.isNaN(convertedOne)} → isInteger: ${Number.isInteger(convertedOne)}`;

document.getElementById("conversion-result-2").textContent =
    `Original value: "${valueTwo}" → Converted: ${convertedTwo} → isNaN: ${Number.isNaN(convertedTwo)} → isInteger: ${Number.isInteger(convertedTwo)}`;

document.getElementById("conversion-result-3").textContent =
    `Original value: "${valueThree}" → Converted: ${convertedThree} → isNaN: ${Number.isNaN(convertedThree)} → isInteger: ${Number.isInteger(convertedThree)}`;

document.getElementById("conversion-result-4").textContent =
    `Original value: "${valueFour}" → Converted: ${convertedFour} → isNaN: ${Number.isNaN(convertedFour)} → isInteger: ${Number.isInteger(convertedFour)}`;




    //Part 3
const itemPrice = 24.99;
const taxRate = 0.10;
const shippingCost = 5.50;

const subtotal = itemPrice + shippingCost;
const taxAmount = itemPrice * taxRate;
const totalCost = subtotal + taxAmount;
const roundedTotal = totalCost.toFixed(2);

document.getElementById("math-result-1").textContent =
    `Item price: $${itemPrice}`;

document.getElementById("math-result-2").textContent =
    `Shipping cost: $${shippingCost} / Subtotal: $${subtotal.toFixed(2)}`;

document.getElementById("math-result-3").textContent =
    `Tax amount: $${taxAmount.toFixed(2)}`;

document.getElementById("math-result-4").textContent =
    `Total cost: $${roundedTotal}`;



//Part 4
if (totalCost >= 30) {
    document.getElementById("math-message").textContent = "The total cost is $30.00 or more.";
} else {
    document.getElementById("math-message").textContent = "The total cost is less than $30.00.";
}