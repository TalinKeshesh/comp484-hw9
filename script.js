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