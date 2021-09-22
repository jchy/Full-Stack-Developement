function Person(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession  = profession;
}

Person.prototype.greet = function(user){
    console.log(`Hey ${user}, I am ${this.name}`);
}

var person = new Person("Nrupul", 24, "Coder");
person.greet("Jaswant");

console.log(person.__proto__ === Person.prototype);
console.log(person.prototype === undefined);
console.log(person.prototype === Person.prototype);

function createPerson(name){
    var obj = {};
    obj.name = name;
    return obj;
}

createPerson.prototype.greet = function(user){
    console.log(`Hey ${user}, I am ${this.name}`);
}

var p = createPerson("jassi");
console.log(p.__proto__.constructor);