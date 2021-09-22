// Loop an array and do something with each element ---> Use forEach()
// Loop an array and create a new array from manipulating each element ---> Use map()
// Loop an array and create a new array by removing some elements based on some criteria ---> Use filetr()
// Loop an array and arrive at a single answer by somehow joining the elements ---> reduce()

var arr = [1,2,3,4,5,6,7,8,9];

var print = function(el){
    console.log(el);
}

var square = function(el){
    return el**2;
}

var squareArr = arr.map(square);
console.log(squareArr);

var isOdd = function(el){
    // console.log(el);
    if(el%2 == 0){
        return false;
    }
    else
        return true;
}
var odd_items = arr.filter(isOdd);
console.log(odd_items);

var greaterThan10 = function(el){
    return(el > 10);
}

// We can apply multiple HOF at same time.
var result = arr.filter(isOdd).map(square).filter(greaterThan10);
console.log(result);

// To print the sum of all elements of the array
var sumOfArr = arr.reduce(function(ac, el){
    // console.log("AC - " + ac);
    // console.log("El -" + el);
    return ac+el;
});

console.log(sumOfArr);

var sum = function(a,b){
    return a+b;
}
// To print the sum of square of all the elements which are odd
var sumOfSqOfOdd = arr.filter(isOdd).map(square).reduce(sum);
console.log(sumOfSqOfOdd);