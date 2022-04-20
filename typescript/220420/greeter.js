// basic datatypes
// let variables: datatype = value
var str = 'str';
var integer = 1;
var float = 3.14;
var bool = true;
// array datatypes
var arr = ['a', 'b', 'c', 'd'];
// tuple: 배열 요소의 조합
var tuple1 = ['str', 1];
var tuple2 = ['str', true];
// let tuple3: [string, boolean] = ['str', true, false]; // err
// datatype에 설정해놓은 자릿수에  맞춰서 value 넣어줘야 함
// Numeric enums(숫자 열거형))
// 객체 내 멤버들의 값을 1씩 증가하면서 차례대로 부여
var Action;
(function (Action) {
    Action[Action["Walk"] = 0] = "Walk";
    Action[Action["Run"] = 100] = "Run";
    Action[Action["Jump"] = 101] = "Jump";
})(Action || (Action = {}));
console.log(Action.Walk); // 0
console.log(Action.Run); // 100
console.log(Action.Jump); // 101
var actionNum = Action.Jump;
// function
function foo(num, str) {
    console.log(num + ' : ' + str);
}
foo(1, 'foo');
// Union(공용체)
function unionFoo(val) {
    console.log(val);
}
unionFoo(1);
unionFoo('str');
// unionFoo(true); // err
// specifying return type
function sum(lhs, rhs) {
    return lhs + rhs;
}
sum(1, 2);
