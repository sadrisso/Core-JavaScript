
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