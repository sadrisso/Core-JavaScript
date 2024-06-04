const questions = [
    {
        qus: 'which is the most largest aminal in the world?',
        ans: [
            {text: 'shiyal', correct: false},
            {text: 'murgi', correct: false},
            {text: 'pakhi', correct: false},
            {text: 'blue wheal', correct: ture}
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