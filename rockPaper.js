
let choices = document.querySelectorAll('.choice')
let msg = document.querySelector('h2');


choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        console.log(userChoice);
        playGame(userChoice)
    });
});


const playGame = (userChoice) => {
    let compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    } 
}


const drawGame = () => {
    msg.innerText = 'Draw';
    msg.style.backgroundColor = 'yellow';
    msg.style.color = 'black';
}


const genCompChoice = () => {
    let idx = Math.floor(Math.random() * 3);
    let options = ['rock', 'paper', 'scissor'];
    return options[idx];
}