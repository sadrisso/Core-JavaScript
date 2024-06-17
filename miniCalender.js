const monthsName = document.querySelector(".months-name");
const dayName = document.querySelector(".day-name");
const dayNumber = document.querySelector(".day-number");
const yearName = document.querySelector(".year-name");



const date = new Date()
const month = date.getMonth();

monthsName.innerText = date.toLocaleDateString("en", {
    month: "long"
});

dayName.innerText = data.toLocaleDateString("en", {
    weekday: "long"
});

dayNumber.innerText = data.getDate();

yearName.innerText = date.getFullYear();