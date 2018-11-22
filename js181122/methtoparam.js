

function add(a, b, callback){
    var result = a + b;
    callback(result);       // callback 자판기
}

// function resultFunc(result){
//     console.log("Result = %d", result);
// }

// add(10, 10, resultFunc);

// add(10, 10, function(result){ console.log("Result = %d", result); });   // 대부분의 함수가 이와 같음, function = 익명함수

add(10, 10, function(result){ 
    console.log("Result = %d", result); 

    add(5, 5, function(result){
        console.log("Result = %d", result);
    });
});


