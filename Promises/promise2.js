console.log(1)
// Promise.resolve(2)
// .then(function(val){
//     console.log(val);
// })

setTimeout(function(){
    console.log(4);
},0)
setTimeout(function(){
    console.log(5);
},500)

Promise.resolve(2)
.then(function(val){
    console.log(val);
})
console.log(3);
