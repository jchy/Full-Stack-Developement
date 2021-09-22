var arr1 = [2, 4, 5, 3, 6, 8];
arr1.forEach((element, index) => {
    if(index%2===0 && element%2===0){
        console.log(element);
    }
} )