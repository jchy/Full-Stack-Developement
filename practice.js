function func(n){
    if(n>100){
        return n-10;
    }
    else
    {
        return func(func(n+11));
        
    }
}

console.log(func(95));