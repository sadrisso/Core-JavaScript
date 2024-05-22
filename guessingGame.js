
// let form = document.querySelector('form');
// let userChoice = document.querySelector('.userChoice');
// let msg = document.querySelector('.msg-container');
// let container = document.querySelector('.container')
// let attempts = document.querySelector('.attempts')
// let attempt = 0;
// let totalAttempts = 5;


// form.addEventListener('submit', (evt) => 
// {
//     evt.preventDefault();
//     attempt++;
//     if (attempt > 4) 
//     {
//         userChoice.disabled = true;
//     }
//     if (attempt < 6) 
//     {
//         let userGuess = Number(userChoice.value)
//         playGame(userGuess)
//     }

//     userChoice.value = '';
// })


// const genRandomNumber = () => 
// {
//     return Math.floor(Math.random() * 5 + 1)
// }

// const playGame = (userGuess) => 
// {
//     let randomNumber = genRandomNumber();

//     // console.log(`User choice is ${userGuess}`)
//     // console.log(`comp choice is ${randomNumber}`)

//     if (userGuess === randomNumber) 
//     {
//         console.log(`You win, your choice ${userGuess} & Computer choice ${randomNumber}`)
//         msg.innerText = `You win, your choice ${userGuess} & Computer choice ${randomNumber}`
//         container.style.backgroundColor = 'green';
//     } 
//     else 
//     {
//         console.log(`You lost, your choice ${userGuess} & Computer choice ${randomNumber}`)
//         msg.innerText = `You lost, your choice ${userGuess} & Computer choice ${randomNumber}`
//         container.style.backgroundColor = 'red';
//     }
    
// } 


let form = $('form');
let userChoice = $('.userChoice');
let msg = $('.msg-container');
let body = $('.container');
let attempt = 0;


form.submit((evt) => 
{
    evt.preventDefault();
    let userValue = Number(userChoice.val());
    attempt ++;
    if (attempt === 6) {
        userChoice.disabled = true;
    } if (attempt < 6) {
        playGame(userValue)
    }
})

const playGame = (userValue) => 
{
    let compValue = genCompChoice(5)

    if (userValue === compValue) {
        console.log(`You win... Your choice: ${userValue} Comp choice: ${compValue}`)
        msg.text(`You win... Your choice: ${userValue} Comp choice: ${compValue}`)
        body.css({'backgroundColor': 'green'});
    } else {
        console.log(`You lost... Your choice: ${userValue} Comp choice: ${compValue}`)
        msg.text(`You lost... Your choice: ${userValue} Comp choice: ${compValue}`)
        body.css({'backgroundColor': 'red'});
    }
}

const genCompChoice = (limit) => 
{
    return Math.floor(Math.random() * limit + 1);
}