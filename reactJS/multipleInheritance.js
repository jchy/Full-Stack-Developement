// Multilevel inheritance 
//Here we will have Person => Coder => coder


function Person(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession = profession;
}

Person.prototype.greet = function(user){
    console.log(`Hey ${user}, I am ${this.name}`);
}

function Coder(name, age){
    Person.call(this, name, age, "Coder");
}

Coder.prototype = Object.create(Person.prototype);

var coder = new Coder("Jaswant", 22);

console.log(coder);
coder.greet("Albert");
console.log(coder.__proto__ === Coder.prototype);
console.log(coder.__proto__.__proto__ === Person.prototype);