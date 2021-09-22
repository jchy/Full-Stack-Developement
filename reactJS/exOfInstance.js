function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.getName = function(){
        console.log("I am", this.name);
    }
}

var person = new Person("Elon",23,"spacex");
var jeff = new Person("Jeff",25,"Amazon");
console.log(person);
jeff.getName();