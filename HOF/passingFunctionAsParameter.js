function hello(name){
    console.log("Hello "+ name);
}

var print = function(name){
    console.log("Print "+ name);
}

function testing(a,functn1,functn2){
    console.log(a);
    functn1(a);
    functn2(a);
}

testing("Jaswant", hello, print);