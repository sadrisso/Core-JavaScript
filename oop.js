
function PartyAnimal ()
{
    this.x = 0;
    this.party = function () {
        this.x = this.x + 1;
        console.log("So far " + this.x);
    }
}

an = new PartyAnimal();
an.party()
an.party()
an.party()


// basic constructor...

function NewAnimal (name, desc)
{
    this.x = 0;
    // this.name = name;
    // this.desc = desc;
    this.party = function ()
    {
        this.x += 1;
        console.log(name + " " + desc + " " + this.x);
    }
}

let obj = new NewAnimal("Elephant", "is one of the most strongest animal");
obj.party();
obj.party();
obj.party();


let data = {};
data.stuff = "Ho";
console.log(data)

let data2 = {};
data2['stuff'] = 'Hi';

console.log(data2[0])



let btn = $(".btn");
let body = $("body");

btn.click(() => {
    body.css("backgroundColor", "red")
});


function Person(first, last, concat) {
    this.firstName = first,
    this.lastName = last,
    this.fullName = concat
}

const person1 = new Person('Elon', 'Misk', get_full_name('Elon', 'Musk'))
console.log(person1.fullName)

function get_full_name(first, last) {
    return first + " " + last;
}


function Student(name) {
    this.name = name
}

Student.prototype.gender = "Female";
let s1 = new Student("Ayesha");

console.log(s1.gender)



function Engineer(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}

Engineer.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName
}

let engineer1 = new Engineer("Shoeb", "Drisso");
let engineer2 = new Engineer("Akter", "Drisso")

console.log(engineer1)
console.log(engineer1.getFullName());
console.log(engineer2.getFullName());



// basic class...


class ClassName {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }

    // class method getter
    get greet() {
        return "Hello " + this.name;
    }

    // setter
    set changeName(newName) {
        this.name = newName;
    }
}

const class1 = new ClassName("Elon Musk", 52);
const class2 = new ClassName("Bill Gets", 67);

class1.changeName = "Drisso";
class2.changeName = "Shoeb"

console.log(class1, class2)
console.log(class1.greet, class2.greet)



// you can declire a class in the variable too..

let Human = class {
    constructor(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }

    get getName() {
        return this.name;
    }

    set setName(newName) {
        this.name = newName;
    }
}

let p1 = new Human("Tesla", 33, "Software Engineer");
let p2 = new Human("Elon", 66, "Mechanical Engineer");

p1.setName = "Jef Bejos";

console.log(p1)