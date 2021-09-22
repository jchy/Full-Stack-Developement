function Person(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.greet = function(user){
        console.log(`hey ${user}, i am ${this.name}`)
    }
}

function Coder(name, age){
    Person.call(this, name, age, "Coder");
    this.code = function(){
        console.log(`${this.name} is coding....`)
    }
    // this.name = name;
    // this.age = age;
    // this.profession = "Coder";
}
function Baker(name, age){
    Person.call(this, name, age, "Baker");
    this.bake = function(){
        console.log(`${this.name} is a baker in India`)
    }
}

function Soldier(name, age){
    Person.apply(this, [name, age, "Soldier"]);
    this.protector = function(){
        console.log(`${this.name} is a baker in India`)
    }
}

var c = new Coder("JASWANT",21);

console.log(c);
c.code();

var b = new Baker("Satya", 22);
console.log(b)
b.bake();

var p = new Soldier("Vikram Batra", 24);
console.log(p);
p.protector();



function MasaiSchool(name, age){
 this.age =age;
}
var a = new MasaiSchool();


