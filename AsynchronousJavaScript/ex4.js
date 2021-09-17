// set timeout
console.log("started");
setTimeout(function(){
    console.log("ended");
    console.log(Date.now()-start);
},3000);

const delay = 5000;
const start = Date.now();

//useless function
while(Date.now() - start < delay){
    //delay program
}
console.log(Date.now()-start);