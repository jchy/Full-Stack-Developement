var arr=["apple", "windows", "ubuntu", "cola", "system"];

var outputarr = [];

arr.forEach((element) => {
    if(element[0]==='a' || element[element.length-1]==='a'){
        outputarr.push(element);
    }
} )

console.log(outputarr);