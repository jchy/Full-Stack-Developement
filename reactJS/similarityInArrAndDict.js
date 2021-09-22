var arr = new Array()
arr.push(5);
console.log(arr);

console.log(typeof arr);

//everything is an object/dictionary in Javascript
// {0:1, 1:2, 2:3}
// [1,2,3]

var a = {0:1, 1:2, 2:3};
var b = [1,2,3];

console.log(a, b);

var key = "0";
console.log(a[key],b[0]);
console.log(a[1],b[1]);
console.log(a[2],b[2]);

for(var key in a){
    console.log(`key = ${key}, value = ${a[key]}`);
}
for(var key in b){
    console.log(`key = ${key}, value = ${b[key]}`);
}

b.push(5);
console.log(b);