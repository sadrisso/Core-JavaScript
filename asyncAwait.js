
// async function automaticaly returns a promise...

async function hello () {
    console.log('hello')
    // this func will return a promise
}



// basic of async function...


const api = (id) => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Weather data', id)
            resolve('200');
        }, 1000);
    })
}

(async () => {
    await api(1);
    await api(2);
    await api(3);
    await api(4);
    await api(5);
})();


// this is IIFE...
(async () => {

})();