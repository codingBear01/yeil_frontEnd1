"use strict";

//Class Declaration
//class 작성 시 헝가리안법(첫 글자 대문자)
class Car {
  //Fields: class를 구성하는 필수 요소
  //'#' 붙이면 private. 외부에서 접근 불가. 없으면 외부에서 수정 가능(public)
  #_wheelCnt;
  #chairCnt;
  #hasSunroof;
  #hasBlackbox;

  static staticValue = "static";

  //Constructor(생성자), 생성자는 객체가 만들어지자마자 바로 호출됨. 생성자에다 필요한 정보를 입력해줘야 함.
  constructor(wheelCnt, chairCnt, hasSunroof = false, hasBlackbox = false) {
    console.log("Car constructor was called!!!");
    //this를 사용하여 매개변수에 입력 받은 값들을 전달
    this._wheelCnt = wheelCnt;
    this.chairCnt = chairCnt;
    this.hasSunroof = hasSunroof;
    this.hasBlackbox = hasBlackbox;
  }

  //Methods: class의 기능. 해당 class의 전용 함수임.
  driving() {
    console.log("Driving!!");
  }

  //Getter 단순히 값을 불러오기만 함. 외부에서 참조만 가능
  //Setter 특정 조건을 충족하는 값만 불러옴. 외부에서 참조 및 조건 내 변경 가능
  //get, set 함수 잘 짤수록 함수가 견고해짐(안정성 up)
  get wheelCnt() {
    console.log("wheelCnt getter");
    return this._wheelCnt;
  }
  //무한루프 빠지는 이유: cnt에 값이 input될 때마다 set함수가 호출됨.
  //해결법: class 내 wheelCnt(동일한 이름)값 앞에 '_' 붙여줘서 구분.
  set wheelCnt(cnt) {
    //조건값 이외 input 시 err msg 출력
    if (cnt > 10) {
      console.log(`ERROR] Out of range(${cnt})`);
      return;
    }
    console.log(`wheelCnt setter: ${cnt}`);
    this._wheelCnt = cnt;
  }
  static staticFunc() {}
} //class Car
//객체 생성
//smallCar는 위에 작성한 class Car의 정보를 가짐. wheelCnt = 4, chairCnt = 4, hasSunroof = false, hasBlackbox는 생략
let smallCar = new Car(4, 4, false);

smallCar.wheelCnt = 100000; //setter에 값 입력
console.log(smallCar.wheelCnt); //wheelCnt getter 4 출력. getter로 입력값 확인
smallCar.hasBlackbox = true;
smallCar.driving();

//Driving();

console.log(smallCar.staticValue);

let bigCar = new Car(10, 2, true, true);
bigCar.staticValue = "Big Car!!";

console.log(smallCar.staticValue);
console.log(bigCar.staticValue);

//정적으로 만들어진 변수와 함수는 객체를 생성하지 않아도 접근 및 사용 가능
Car.staticValue = "Car static";
Car.staticFunc();
