
let form = document.querySelector('form');
let userChoice = document.querySelector('.userChoice');
let msg = document.querySelector('.msg-container');
let container = document.querySelector('.container')

form.addEventListener('submit', (evt) => 
{
    evt.preventDefault();
    let userGuess = Number(userChoice.value)
    playGame(userGuess)
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

    if (userGuess === randomNumber) {
        console.log(`You win, your choice ${userGuess} & Computer choice ${randomNumber}`)
        msg.innerText = `You win, your choice ${userGuess} & Computer choice ${randomNumber}`
        container.style.backgroundColor = 'green';
    } else {
        console.log(`You lost, your choice ${userGuess} & Computer choice ${randomNumber}`)
        msg.innerText = `You lost, your choice ${userGuess} & Computer choice ${randomNumber}`
        container.style.backgroundColor = 'red';
    }
} 