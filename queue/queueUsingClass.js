const prompt = require('prompt-sync')();
class queue{
    constructor(){
        this.arr = [];
    }
    enqueue(elem){
        this.arr.push(elem);
    }
    dequeue(){
        if(this.arr.length === 0){
            console.log("underflow");
        }
        console.log(this.arr.shift());
    }
    printqueue(){
        var out ="";
        if(this.arr.length===0)
            console.log("empty");
        else{
            for(var i=0;i< this.arr.length;i++){
                out+= this.arr[i]+" ";
            }
           console.log(out);
        }
    }
}
var q = new queue();

var wish;

  do{
    var choice = parseInt(prompt("Enter your choice :\n 1 for enqueue \n press 2 for dequeue \n press 3 to print the queue\n"));
   switch(choice){
       case 1: 
               var elem = parseInt(prompt("enter the value to be enqueue\n"));
               q.enqueue(elem);
               break;
       case 2: 
               q.dequeue();
               break;
       case 3: 
               q.printqueue();
               break;
       default:
           console.log("Sorry you are ghochu student\n");
    
   }
  wish = prompt("do you want to continue yes/no\n");
}while(wish === 'yes');



 