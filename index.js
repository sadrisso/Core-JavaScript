let form = document.querySelector('form');
let userInput = document.querySelector('.userInput');
let attempt = 0;
let msg = document.querySelector('p');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    attempt++;
    if (attempt === 5) {
        userInput.disabled = true; 
    } if (attempt < 6) {
        let guessNumber = Number(userInput.value);
        getResult(guessNumber);
    }
    userInput.value = '';
   
});


const genRandomNumber = () => {
    return Math.floor(Math.random() * 5 + 1);
}


const getResult = (userChoice) => {
    let randomNumber = genRandomNumber();

    if (userChoice === randomNumber) {
        console.log('You win')
        msg.innerText = 'Congratulations, you win';
    } else {
        console.log('You lost');
        msg.innerText = 'Try again';
    }
}

