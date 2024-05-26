

let URL = 'https://catfact.ninja/fact';
let body = document.querySelector('.body');
let btn = document.querySelector('.btn');
let newBtn = document.querySelector('.newBtn');


const getFacts = async () => 
{
    console.log('Getting data...')
    let response = await fetch(URL);
    console.log(response)
    let data = await response.json();
    body.innerText = data.fact;
};

btn.addEventListener('click', getFacts);



let url = 'https://official-joke-api.appspot.com/random_joke';

const getData = async () => 
{
    await fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        body.innerHTML = data.punchline;
    })
};

newBtn.addEventListener('click', getData);