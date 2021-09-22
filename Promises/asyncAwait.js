function task(delay){
    return new Promise(function(resolve, reject){
         if(typeof delay !== "number"){
            reject("please pass a number into task function")
         }
        setTimeout(function(){
            const number = (Math.floor(Math.random()*100))
            resolve(number);
        },delay)
    });
}

//async await

// task(2000)
// .then(function(value){
//     console.log(value);
//     return task(2000);
// })
// .then(function(value){
//     console.log(value);
// })

async function main(){
    try{
            const response = await task("2000");
            console.log(response);
            // const response2 = await task(2000);
            // console.log(response2);
    }
    catch(e){
        console.log("error : " + e)
    }
    try{
            const response2 = await task(2000);
            console.log(response2);
    }
    catch(e){
        console.log("error : " + e)
    }
}
main()