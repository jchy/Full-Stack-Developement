// Custom Array-II Pending

// Problem

// Whatever arguments are being passed, add them as a key-value pair
//  in our Array object. Here, the key will be the index number, starting from zero.
function CustomArray(){
    Object.defineProperty(this,"length",{
        value : 0,
        writable: true,
        enumerable:false
    })
}
CustomArray.prototype.push = function(value){
    this[this.length] = value;
    this.length++;
    return this.length;
}
var arr = new CustomArray();
console.log(arr);
arr.push(10);
arr.push(11);
arr.push(12);
arr.push(13);
arr.push(14);
arr.push(15);
console.log(arr);