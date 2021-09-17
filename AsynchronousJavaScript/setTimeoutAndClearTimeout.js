const callback = function(number){
    console.log("callback has been called "+ number);
}

console.log("start");
const id = setTimeout(function(){
    callback(1)}, 1000);
const id2 = setTimeout(function(){
    callback(2)}, 500);

clearTimeout(id2);
console.log("end");