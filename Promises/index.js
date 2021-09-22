// Promise
// executor
// let promise = new Promise(executor);

// function executor(resolve, reject){
//     setTimeout(function(){
//         //resolve("Resolved");
//         reject("Oops");
//     },1000)
// }
// console.log(promise);
// promise.then(function(response){
//     console.log(promise);
//     console.log(response);
// })
// const callback = function(response){
//     console.log(promise);
//     console.log(response);
// }
// console.log(promise);
// promise.then(callback).catch(function(err){
//     console.log(err);
// })


// promise can be :-
// * pending
// * resolved
// * rejected

function fun(){
    return new Promise((resolve, reject) => {
        
    });
}

function sleep(delay){
    return new Promise(function(resolve, reject){
         if(typeof delay !== "number"){
            reject("Please pass a number into the sleep function")
         }
        setTimeout(function(){
            resolve("success");
        },delay)
    });
}
sleep(3000)
.then(function(){
    console.log("slept for 3000ms");
})
.catch(err=>{
    console.log(err);
})
sleep("m")
.then(function(){
    console.log("slept for 3000ms");
    return "Return value from the first .then"
})
.then(function(value){
    console.log(value);
})

.catch(err=>{
    console.log(err);
    return "Return value from error"
})
.then(function(value){
    console.log(value);
})

setTimeout(function(){
    var i = a(b);
   // console.log(i);
},3000)

function a(callback){
    setTimeout(function(){
        console.log('a');
        return callback(100);
    },1000)
}
function b(value){
    console.log("value is", value);
}
