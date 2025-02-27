// const business = (capital) => {
//     return function profit(interest) {
//         console.log(capital * interest)
//     }
// }

// const business1 = business(10000)
// console.log(business1(24))


function business (capital) {
    return function profit(interest) {
        console.log(capital * interest)
    }
}

const business1 = business(100)
console.log(business1(10))