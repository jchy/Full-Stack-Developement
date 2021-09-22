var queue = [];
var front = 0;
var rear = 0;

function enqueue(val){
    queue[rear++] = val;
}

function dequeue(){
    if(rear === front){
        console.log("underflow");
    }
    else{
        console.log(queue[front]);
        front++;
    }
}
 function printQueue(){
     if(queue.length === 0)
        console.log("It's an empty queue");
     else{
         for(let i=front;i<queue.length;i++){
             process.stdout.write(`${queue[i]} `);
         }
     }
 }
enqueue(50);
enqueue(20);
dequeue();
enqueue(30);
enqueue(40);
printQueue();
dequeue();
dequeue();
dequeue();
dequeue();

