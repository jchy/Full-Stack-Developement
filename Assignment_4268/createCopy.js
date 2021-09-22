//Declaring and defining arrayObject function
function arrayObject(arr){
    //creating a new array arr2 in which we will copy all elements of original array "arr"
    var arr2 = new Array();
    // copying the value of the arr into arr2
    for(var i=0;i<arr.length;i++){
        arr2[i] = arr[i];
    }
    // changing the value at 0th index of arr2 to observe the changes
    arr2[0]="Venugopal";
    //printing arr
    console.log(arr);
    // prining the arr2 
    console.log(arr2);
}

//  creating and array object arr
var arr = ["Aman","Ankush", "Albert", "Nrupul", "Prateek", "Yogesh"];
// calling the function arrayObject to copy the arr element into arr2;
arrayObject(arr);
// printing arr 
console.log(arr);