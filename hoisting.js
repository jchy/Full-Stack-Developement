function a(){
    function b(){
        function c(){
            var x=100;
        }
        c();
    }
    b();
}
a();
console.log( x);