var count =0;
const id= setInterval( function(){
    console.log(new Date().toTimeString());
    console.log(count);
    count+=2;
    if(count > 11){
        clearInterval(id);
    }
}, 1000);