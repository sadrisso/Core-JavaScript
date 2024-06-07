
const person = {
    firstNnme: 'Elon',
    lastName: 'Musk',
    age: 35,
    greet: function() {
        console.log('Hello world ' + " " + this.firstNnme + this.lastName + this.age)
    }
}

person.greet();



const student = {
    firstNnme: 'Mark',
    lastName: 'jukarbarg'
}

function greet() {
    console.log('I am greet function')
}

student.greeting = greet;
console.log(student)



const random = {
    name: 'hi',
    age: 11,
    greet() {
        console.log('Hi')
    }
}

random.greet();