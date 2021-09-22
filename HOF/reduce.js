var arr = [1,2,3,4,5,6];

var sumArr = arr.reduce(function(accumulator, element){
    return accumulator + element;
}, 10);
// In the above syntax initial value of the accumulator is 10.
// accumulator will have acumulated value.

console.log(sumArr);