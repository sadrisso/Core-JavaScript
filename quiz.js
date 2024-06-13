
const questions = [
    {
        question: "Which is the most largest animal in the world?",
        answer: [
            {text: "shark", correct: false},
            {text: "elephant", correct: false},
            {text: "gieeraf", correct: false},
            {text: "blue wheal", correct: true},
        ]
    },
    {
        question: "Who is the best crickter in bangladesh team?",
        answer: [
            {text: "mushfiq", correct: false},
            {text: "shakib", correct: true},
            {text: "mashrafi", correct: false},
            {text: "tamim", correct: false},
        ]
    },
    {
        question: "Which is the national flower of bangladesh?",
        answer: [
            {text: "golap", correct: false},
            {text: "joba", correct: false},
            {text: "madhobilota", correct: false},
            {text: "shapla", correct: true},
        ]
    },
    {
        question: "Worlds largest country?",
        answer: [
            {text: "russia", correct: true},
            {text: "canada", correct: false},
            {text: "china", correct: false},
            {text: "bangladesh", correct: false},
        ]
    }
];


const questionElement = document.querySelector("#questions");
const answerButtons = document.querySelector("#answer-buttons");
const nxtButton = document.querySelector("#nxt-btn");
let crntQusIdx = 0;
let score = 0;


const start_quiz = () =>
{
    crntQusIdx = 0;
    score = 0;
    nxtButton.innerHTML = "Next";
    show_qustions();
}

const show_qustions = () =>
{
    reset_state();
    let crntQus = questions[crntQusIdx];
    let qusNo = crntQusIdx + 1;
    questionElement.innerHTML = qusNo + ". " + crntQus.question;

    crntQus.answer.forEach((ans) => {
        let button = document.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (ans.correct) {
            button.dataset.correct = ans.correct;
        }
        button.addEventListener("click", select_answer);
    });
}


const reset_state = () =>
{
    nxtButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


const select_answer = (e) =>
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add = "correct";
    } else {
        selectedBtn.classList.add = "incorrect";
    }
}


start_quiz();