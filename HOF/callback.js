var print = function(message) {
    console.log(message);
}

// function print(message) {
//     console.log(message);
// }

function sum(x, y, callBack){
    //here it is not neccessary to write callBack you can write anything you would like
    var total = x+y;
    callBack(total);
}

sum(40, 20, print); 
//Here we are passing print function as argumnet to a function
//but we need not to use parenthesis after the name of function if we do use it will gove us undesired output