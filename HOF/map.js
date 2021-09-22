var arr = ['1','2','3','4','5'];

var numberArr = arr.map(function(element){
    return Number(element);
});
console.log(numberArr);

var fruits = ['apple','banana','mango','watermelon','pomegranate'];
// To print the lenegth of each string of the array fruits see the code below

var arrOfLengthOfFruitArr = fruits.map(function(element){
    return element.length;
})
console.log(arrOfLengthOfFruitArr);