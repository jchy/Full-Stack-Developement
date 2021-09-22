// Problem

// Implement the inheritance model of your family both using Object.create() and constructor functions.
// Starting from your grandparents to your parents and you.
// Create a two min video explaining the prototype chain for the above example. Show proto object.
function Grandparents(name,profession){
    this.name = name;
    this.profession = "Professor";
}
Grandparents.prototype.welcomemsg = function(user){
    console.log(`Hey ${user}, we,the grandparents of ${this.name},We are working as a ${this.profession} at Harvard School of Economics, Welcoming you to our home`);
}

function Parents(name,profession){
    Grandparents.call(this,name,profession);
}
Parents.prototype = Object.create(Grandparents.prototype);

Parents.prototype.eat= function(user){
    console.log(`Hey ${user},we the parent of ${this.name} inviting you at home to have Dinner with us`);
}

var son = new Parents("Jaswant","Student");
son.eat("Yogesh");
son.welcomemsg("Albert");

console.log(son.__proto__ === Parents.prototype);
console.log(Parents);
console.log(Grandparents);



