function MyArray(){
    this.length = 0;
    this.push = function(value){
        this[this.length++] = value;
        return this.length;
    }
}

var arr = new MyArray();
arr.push(5);
console.log(arr);

console.log(arr[0]);
// Js uses prototype based inheritance
// it is a multi paradigm(pattern) language
// we access the parent using "__proto__" for lookup 