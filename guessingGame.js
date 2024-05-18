
let form = document.querySelector('form');
let userChoice = document.querySelector('.userChoice')

form.addEventListener('submit', (evt) => 
{
    evt.preventDefault();
    console.log(userChoice.value)
})