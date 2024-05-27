

let URL = 'https://catfact.ninja/fact';
let url = 'https://official-joke-api.appspot.com/random_joke';
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



const getData = async () => 
{
    console.log("getting data...")
    await fetch(url).then((response) => {
        console.log(response)
        return response.json();
    }).then((data) => {
        body.innerHTML = data.punchline;
    })
};

newBtn.addEventListener('click', getData);




let publicApiUrl = 'https://api.nationalize.io?name=nathaniel';

let btnn = document.querySelector('.btnn')


const getPublicDetails = async () => 
{
    console.log('getting data...')
    let res = await fetch(publicApiUrl);
    console.log(res)
    let data = await res.json();
    body.innerHTML = data.country[0];
}

btnn.addEventListener('click', getPublicDetails);



let universityList = 'http://universities.hipolabs.com/search?country=United+States';

const getUniversityList = async () => 
{
    console.log('Loading...')
    // let response = await fetch(universityList);
    // let data = response.json();
    // console.log(data)
    await fetch(universityList).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data)
    })
}