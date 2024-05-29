
let BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropdowns = document.querySelectorAll('.dropdown select');



for (select of dropdowns) 
{
    for (currCode in countryList)
    {
        let newOption = document.createElement("option")
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
    }
}























// for (select of dropdowns) 
// {
//     for (currCode in countryList) 
//     {
//         let newOption = document.createElement('option');
//         newOption.innerText = currCode;
//         newOption.value = currCode;

//         if (select.name === "from" && currCode === "USD") {
//             newOption.selected = "selected";
//           } else if (select.name === "to" && currCode === "BDT") {
//             newOption.selected = "selected";
//           }

//         select.append(newOption);
//     }

//     select.addEventListener('change', (evt) => 
//     {
//         update_flag(evt.target)
//     });
// }

// const update_flag = (element) => 
// {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector('img');
//     img.src = newSrc;
// }