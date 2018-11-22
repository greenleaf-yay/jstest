https://opentutorials.org/module/532/6508





function add(a, b, myFunc){
    
    var result = a +  b;
    myFunc(result);
}


function oldAdd(a, b){
    return a + b;
}

var result = oldAdd(1, 3);
result = oldAdd(1, 5);      // oldAdd(1, result)
result = oldAdd(1, 4);      // oldAdd(1, result)

//result = oldAdd(1, 5);
