
let form = document.querySelector('form');
let userChoice = document.querySelector('.userChoice');
let msg = document.querySelector('.msg-container');
let container = document.querySelector('.container')
let attempts = document.querySelector('.attempts')
let attempt = 0;
let totalAttempts = 5;

form.addEventListener('submit', (evt) => 
{
    evt.preventDefault();
    attempt++;
    if (attempt > 4) 
    {
        userChoice.disabled = true;
    }
    if (attempt < 6) 
    {
        let userGuess = Number(userChoice.value)
        playGame(userGuess)
    }

    userChoice.value = '';
})


const genRandomNumber = () => 
{
    return Math.floor(Math.random() * 5 + 1)
}

const playGame = (userGuess) => 
{
    let randomNumber = genRandomNumber();

    // console.log(`User choice is ${userGuess}`)
    // console.log(`comp choice is ${randomNumber}`)

    if (userGuess === randomNumber) 
    {
        console.log(`You win, your choice ${userGuess} & Computer choice ${randomNumber}`)
        msg.innerText = `You win, your choice ${userGuess} & Computer choice ${randomNumber}`
        container.style.backgroundColor = 'green';
        container.innerText = `Remaining attempts = ${totalAttempts} - ${attempt}`
    } 
    else 
    {
        console.log(`You lost, your choice ${userGuess} & Computer choice ${randomNumber}`)
        msg.innerText = `You lost, your choice ${userGuess} & Computer choice ${randomNumber}`
        container.style.backgroundColor = 'red';
        container.innerText = `Remaining attempts = ${totalAttempts} - ${attempt}`
    }
    
} 