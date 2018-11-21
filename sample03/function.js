
function add(x, y) {
    var total = x + y;
    return total;
}

var result = add(2, 3);
console.log(result);

function add2(){
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(add2(2, 3, 4, 5));





var avg = function(){       // 익명함수는 변수부분 제거
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++){
        sum += arguments[i];
    }
    return sum / arguments.length;
}
console.log(avg(3,4,5,6));

//var newVal = avg()

function makePerson(first, last) {
    return{
        first: first,
        last: last,
        fullName: function(){
            return this.first + ' ' + this.last;
        },
        fullNamereversed: function(){
            return this.last + ', ' + this.first;
        }
    }
}

var person = makePerson("Junil", "Ko");
console.log(person.fullName());
console.log(person.fullNamereversed());

var func = person.fullName;
console.log(func());


