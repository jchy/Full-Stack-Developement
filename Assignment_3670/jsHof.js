var numbers =[11,12,13,14,15,16];

numbers.forEach(function(el){
    console.log(el*el);
})

var double = function(el){
    return el*2;
}
var num_doubles = numbers.map(double);
console.log(num_doubles);

var isOdd = function(el){
    return (el%2===1);
}

var num_odd = numbers.filter(isOdd);
console.log(num_odd);

var product = function(ac, el){
    return ac*el;
}

var num_prod = numbers.reduce(product);
console.log(num_prod);

var sum = function(ac, el){
    return ac + el;
}

var num_odd_sum = numbers.filter(isOdd).reduce(sum);
console.log(num_odd_sum);

var divby3 = function(el){
    return el%3===0;
}

var cubes = function(el){
    return el**3;
}

var num_3cube_sum = numbers.filter(divby3).map(cubes).reduce(sum);
console.log(num_3cube_sum);