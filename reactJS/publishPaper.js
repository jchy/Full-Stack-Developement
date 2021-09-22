

function NewsPaper(title,id){
    this.name = title;
    this.createdAt = new Date().toString();
    this.day = new Date().getDay();
    this.id = id;
}
var p = new NewsPaper("Times of India","2021-09-07");
console.log(p);

/*
 * Stack Constructor
*/

function Stack(){
    this.value = [];
    this.stackPop = function(){
        // * returns the pop element
        if(this.value.length > 0){
            return this.value.pop();
        }
        else{
            console.log("Stack is empty");
        }
    }
    this.stackPush = function(value){
        this.value.push(value);
    }
    this.peek = function(){
        console.log(this.value[this.value.length-1]);
        return this.value[this.value.length-1];
    }
}

var stack = new Stack();
stack.stackPush(5);
stack.peek();
stack.stackPop();
stack.peek();

var obj ={
    name : "Jaswant",
    getName: function getName(){
        console.log(this.name)
    },
    b(){
        console.log("function b")
    }

}
obj.getName();
var getName = obj.getName;
getName();


