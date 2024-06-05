const questions = [
    {
        qus: 'which is the most largest aminal in the world?',
        ans: [
            {text: 'shiyal', correct: false},
            {text: 'murgi', correct: false},
            {text: 'pakhi', correct: false},
            {text: 'blue wheal', correct: ture},
        ]
    },
    {
        qus: 'who is the most best batsman in the world',
        ans: [
            {text: 'shiyal', correct: false},
            {text: 'murgi', correct: false},
            {text: 'tendulkar', correct: true},
            {text: 'blue wheal', correct: false}
        ]
    },
    {
        qus: 'national flower in bangladesh?',
        ans: [
            {text: 'shiyal', correct: false},
            {text: 'murgi', correct: false},
            {text: 'pakhi', correct: false},
            {text: 'shapla', correct: ture}
        ]
    },
    {
        qus: 'highest hill in bangladesh?',
        ans: [
            {text: 'shiyal', correct: false},
            {text: 'murgi', correct: false},
            {text: 'pakhi', correct: false},
            {text: 'jogi jotlong', correct: ture}
        ]
    },
]

const ques = document.querySelector(".ques");
const ansBtn = document.querySelector(".ans-buttons");
const nxtBtn = document.querySelector(".nxt-btn")
let crntQusIndx = 0;
let score = 0;


const start_quiz = () => 
{
    crntQusIndx = 0;
    score = 0;
    nxtBtn.innerHTML = "Next";
    show_ques();
}

const show_ques = () => 
{
    let crntQus = questions[crntQusIndx];
    let qusNo = crntQusIndx + 1;
    ques.innerHTML = qusNo + "." + crntQus.qus;

    crntQus.ans.forEach((ans) => {
        const button = documen.createElement("button");
        button.innerHTML = ans.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
    })
}

start_quiz();