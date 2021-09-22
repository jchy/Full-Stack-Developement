console.log('1');
const promise = new Promise(function(resolve, reject){
    console.log('2');
    setTimeout(function(){
        resolve(3);
    },0)
})
promise.then(function(val){
    console.log(val);
})
console.log('4');