var arr = new Array();
arr[0] = "dog";
arr[1] = 23;
arr[2] = "cat";
arr[100] = "a";

console.log(arr[2]);
console.log(arr.length);

// arr.length      // 변수, property, 속성
// arr.length()    // 함수가 실행되었다, 자바스크립트에서 함수는 1급 객체

var arr2 = new Array("cat", "dog");
console.log(arr2.length);

var arr3 = ["dog", "cat", "tiger"];
console.log(typeof(arr3[0]));

for (var i = 0; i < arr3.length; i++){
    console.log("%s", arr3[i]);
}

for (var i = 0, len = arr3.length; i < len; i++){
    console.log("New result = %s", arr3[i]);
}

for (var i = 0, item; item = arr3[i]; i++){
    console.log("Result2 = %s", item);
}

for (var i in arr3)
{
    console.log("Result3 = %s", arr3[i]);
}

