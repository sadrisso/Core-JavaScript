

// callback hell .........


// const get_data = (id, get_next_data) => 
// {
//     setTimeout(() => 
//     {
//         console.log('Data', id)
//         if (get_next_data) 
//         {
//             get_next_data();
//         }
//     }, 2000)
// }


// get_data(1, () => {
//     get_data(2, () => {
//         get_data(3, () => {
//             get_data(4)
//         });
//     });
// });




// promises ..........


// let promise = new Promise((resolve, reject) => 
// {
//     console.log('I am a promise');
//     resolve('Success..')
// })

// console.log(promise)



// const getData = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('This is data', id)
//             resolve('success!')
//         }, 2000)
//     })
// }

// let promise = getData(111);
// console.log(promise)
// setTimeout(() => {
//     console.log(promise)
// }, 3000)



const data1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log( 'This is data 1..')
            resolve('OKAY');
        }, 2000);
    })
}

const data2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log( 'This is data 2..')
            resolve('okay');
        }, 2000);
    })
}

data1().then((res) => {
    data2().then((res) => {
    })
})


const my_data = (myDataId) => {
    return new Promise((resolve, reject) => {
        console.log('My data no', myDataId)
        resolve('done.')
    })
}

my_data(1).then((res) => {
    my_data(2).then((res) => {
        my_data(3).then((res) => {
            console.log(res)
        })
    })
})