
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

}