
let choices = document.querySelectorAll('.choice')
let msg = document.querySelector('h2');


choices.forEach((choice) => 
{
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice)
    });
});

const drawGame = () => 
{
    msg.innerText = 'Draw';
    msg.style.color = 'yellow';
}


const playGame = (userChoice) => 
{
    let compChoice = genCompChoice();
    console.log(userChoice)
    console.log(compChoice)

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === 'rock') {
            userWin = compChoice === 'scissor' ? true : false;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'rock' ? true : false;
        } else {
            userWin = compChoice === 'paper' ? true : false;
        }
        showWinner(userWin, compChoice, userChoice);
    }
}


const genCompChoice = () => 
{
    let idx = Math.floor(Math.random() * 3);
    let options = ['rock', 'paper', 'scissor'];
    return options[idx];
}


const showWinner = (userWin, compChoice, userChoice) => 
{
    if (userWin) {
        msg.innerText = `Congratulations, your ${userChoice} beats computer ${compChoice}`;
        msg.style.color = 'Green';
    } else {
        msg.innerText = `You lost, computer ${compChoice} beats your ${userChoice}`;
        msg.style.color = 'red';
    }
}
