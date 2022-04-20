// basic datatypes
// let variables: datatype = value
let str: string = 'str';
let integer: number = 1;
let float: number = 3.14;
let bool: boolean = true;

// array datatypes
let arr: string[] = ['a', 'b', 'c', 'd'];

// tuple: 배열 요소의 조합
let tuple1: [string, number] = ['str', 1];
let tuple2: [string, boolean] = ['str', true];
// let tuple3: [string, boolean] = ['str', true, false]; // err
// datatype에 설정해놓은 자릿수에  맞춰서 value 넣어줘야 함

// Numeric enums(숫자 열거형))
// 객체 내 멤버들의 값을 1씩 증가하면서 차례대로 부여
console.log('----- Numeric enums -----');
enum Action {
  Walk,
  Run = 100,
  Jump,
}
console.log(Action.Walk); // 0
console.log(Action.Run); // 100
console.log(Action.Jump); // 101

let actionNum: number = Action.Jump;

// function
console.log('----- function -----');
function foo(num: number, str: string) {
  console.log(num + ' : ' + str);
}
foo(1, 'foo');

// Union(공용체)]
console.log('----- Union -----');
function unionFoo(val: number | string) {
  console.log(val);
}
unionFoo(1);
unionFoo('str');
// unionFoo(true); // err

// specifying return type
console.log('----- specifying return type -----');
function sum(lhs: number, rhs: number): number {
  return lhs + rhs;
}
console.log(sum(1, 2));

// specifying function type
console.log('----- specifying function type -----');
// parameter의 datatpye은 string이고 return datatype은 void
let foo2: (name: string) => void;
foo2 = (name): void => {
  console.log(name);
};
foo2('kmm');
