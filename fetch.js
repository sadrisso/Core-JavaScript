

let URL = 'https://catfact.ninja/fact';
let body = document.querySelector('.body');
let btn = document.querySelector('.btn');


const getFacts = async () => 
{
    console.log('Getting data...')
    let response = await fetch(URL);
    console.log(response)
    let data = await response.json();
    body.innerText = data.fact;
};

btn.addEventListener('click', getFacts);