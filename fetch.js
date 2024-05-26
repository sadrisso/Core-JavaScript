

let URL = 'https://catfact.ninja/fact';


const getFacts = async () => {
    let promise = await fetch(URL);
    console.log(promise)
}