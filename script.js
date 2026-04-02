const today = new Date();

const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const year = today.getFullYear();

document.getElementById("today-date").textContent = `Today is ${month}/${day}/${year}`;