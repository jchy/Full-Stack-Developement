var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];
var sum=0;
arr.forEach((element) => {
    if(element.length%2!==0){
        sum+=element.length;
    }
} )

console.log(sum);