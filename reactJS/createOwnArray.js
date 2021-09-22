function MyArray(){
    Object.defineProperty(this, "length",{
        value:0,
        writable: true
    })
}
// push()
MyArray.prototype.push = function(value){
    this[this.length]=value;
    this.length++;
    return this.length;
}

MyArray.prototype.map = function(callback){
    var result = new MyArray();
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var returnElement = callback(this[index], Number(index),this);
            result.push(returnElement);
        }
    }
    return result;
}

var arr = new MyArray();
arr.push(5);
arr.push(10);
console.log(arr, arr.length);

for(var key in arr){
    console.log(`key ${key} - value ${arr[key]}`);
}

var res = arr.map( function(el, index, arr){
    return el*el;
});
console.log('response is', res);

console.log(res[0], res[1]);


//pop()
MyArray.prototype.pop = function(){
    if(this.length === 0){
        return undefined;
    }
    var poppedElement = this[this.lenght-1];
    delete this[this.length-1];
    return poppedElement;
}
