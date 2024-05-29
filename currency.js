
let BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll('.dropdown select');


for (select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        console.log(newOption)
        select.append(newOption);
    }
}