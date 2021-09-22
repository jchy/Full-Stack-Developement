var queue = new Array(5);
var front = 0;
var rear = 0;
var count=0;
var n = 5;

function enqueue(val){
    queue[rear] = val;
    rear = (rear+1)%n;
    count++;
}

function dequeue(){
    if(count===0){
        console.log("underflow");
    }
    else{
        console.log(queue[front]);
        front = (front+1)%n;
        count--;
    }
}
 function printQueue(){
     if(count === 0)
        console.log("It's an empty queue");
     else{
         for(let i=0;i<queue.length;i++){
             process.stdout.write(`${queue[i]} `);
         }
     }
 }

enqueue(50);
enqueue(20);
enqueue(30);
enqueue(40);
enqueue(70);
printQueue();
dequeue();
dequeue();
enqueue(90);
enqueue(29);
printQueue();
console.log(rear);
console.log(front);
