








function testFunc(val)
{
    if(val > 0)
    {
        console.log("val = %d", val);
        testFunc(val--);
    }
}
testFunc(10);


var method = function(val){
    if(val > 0){
        console.log("val = %d", val);
        arguments.callee(--val);
    }
}
method(10);









function testFunc(){
    var a = 1;
    function innerMethod(){
        return a + 1;
    }
    return innerMethod();
}

var a = testFunc();
console.log(a);





function makeAdder(a){
    return function(b){
        return a + b;
    }
}
x = makeAdder(5);
y = makeAdder(20);

console.log(x(6));
console.log(y(7));








