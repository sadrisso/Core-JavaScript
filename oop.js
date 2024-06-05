
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