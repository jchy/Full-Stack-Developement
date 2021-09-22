var array = [2, 4, 5, 3, 6, 8];

var oddElement = function(el){
    return (el%2 === 1 && arr.indexOf(el)%2 === 1)
}

var is_odd = array.filter(oddElement);
console.log(is_odd);