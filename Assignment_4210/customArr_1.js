// Custom Array-I 

// Problem

// Create your custom Array constructor which should return an Array Object.
// It should have the property as length depending upon the total no of arguments
//  passed to the constructor function.
function CustomArray(){
    Object.defineProperty(this, "length",{
        value : 0,
        writable: true,
        enumerable:false
    })
}
var arr = new CustomArray();
console.log(arr);