// Problem

// Use the .Prototype property availible on constructor functions to add custom methods to your Array constructor function.
// Add the following methods
// Pushing a new value to the array
// Reversing the array and returning it
// printing the array in Array format, not the object one.
// return the first element from the array

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

CustomArray.prototype.reverse = function(){
    var result = '[';
    for(let i=this.length-1;i>0;i--){
        result+=this[i]+",";
    }
    result += this[0];
    result+="]";
    return result;
}
CustomArray.prototype.print = function(){
    var result = '[';
    for(let i=0;i<this.length-1;i++){
        result+=this[i]+",";
    }
    result += this[this.length-1];
    result+="]";
    console.log(result);
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
console.log("Reversing the Array arr : ", arr.reverse());
arr.print();

