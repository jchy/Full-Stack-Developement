var arr = [1,2,3,4,5,6,7,8,9];

var evenElemOfArr = arr.filter(function(elem){
    return (elem%2 ==0);
});
console.log(evenElemOfArr);

// print the length of fruits array which are greater than 6
var fruits = ['apple','mango','banana','pomegranate']; 

var lenArrOfelementOfFruits = fruits.filter(function(elem){
    return (elem.length > 5);
});
console.log(lenArrOfelementOfFruits);