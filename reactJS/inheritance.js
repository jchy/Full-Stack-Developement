var person = {
    name: "Raju",
    nationality: "Indian"
}

//* inheritance
var child = Object.create(person);
child.name = "Manu";
child.age = 26;
console.log(child.__proto__);
console.log(child.name);
console.log(child.age);