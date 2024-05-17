
let choices = document.querySelectorAll('.choice')

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        console.log(userChoice);
    });
});


const genCompChoice = () => {
    let idx = Math.floor(Math.random() * 3);
    let options = ['rock', 'paper', 'scissor'];
    return options[idx];
}