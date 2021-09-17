var start = Date.now();
function printNumber(number){
    console.log("number",number);
}
printNumber(1);
printNumber(2);
let count =3;

const id = setInterval(function(){
    printNumber(count++);
    if(count==9)
      clearInterval(id);
}, 1000);

const delay =5000;
// for(let i=5;i<1000;i++)
// {
//     printNumber(i);
// }
while(Date.now()-start < delay){
    //delay the program
}