var arr = [1,2,3,4,5];

arr.forEach(function(element){
    console.log(element); 
    // Here element will give you each element of the array
});

var fruits = ['apple','banana','mango','watermelon','pomegranate'];

fruits.forEach(function(element, index){
    console.log(index+ "-" + element);
})

//forEach() can have multiple parametrs if you provide :
// 1 Parameter(element) : elements of the array
// 2 Parameter(element, index) : elements of the array & Index of the array
// 3 Parameter(element, index, array) : elements of the array & Index of the array and the whole array
var states = ['up','rajasthan','delhi','assam','bihar','punjab'];
states.forEach( function(element, index, array){
    console.log(arr);
})