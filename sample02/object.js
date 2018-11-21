var obj = new Object(); //빈객체 생성 1

//

var obj = {};//빈객체 생성 2

obj.name = "Junil";
console.log(obj.name)

var obj2 = new Object();
obj2["name"] = "홍길동";
console.log(obj2);


var person = {
    name: "홍길동",
    age: 33,
    address: {
        zipcode: 14500,
        city:"서울"
    }
}