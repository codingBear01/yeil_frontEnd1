"use strict";

// Parent - Child
// Super - Sub
// Base - Derived
// Parent와 Child의 관계는 교집합 관계(is-a)가 되어야 함.
// ex) Parent(person)-Child(police) = true, Prarent(person)-Child(money) = false
class Parent {
  parentVal = 100;

  constructor() {
    console.log("Parent Constructor Call!!");
  }

  parentFunc() {
    console.log("ParentFunc Call!!");
  }
}

class Child extends Parent {
  childVal = 200;

  constructor() {
    super(); // call Parent constructor
    console.log("Child Constructor Call!!");
  }

  childFunc() {
    console.log("childFunc Call!!");
  }
}

let child = new Child();
// child. 입력하면 부모가 가진 value, func 전부 표시. 부모로부터 물려 받아서 추가, 수정 등

/*
// Parent(Person) "is a" Child(Cop)
// Child(Cop) "has a" 수갑(Person이 가질 수 있는 보편적인 속성이 아님.)
// Child는 Parent로부터 inherit 받을 수 있는 properties만을 가져야 함.
// UML Tools 활용하여 객체 상속 관계 명확히 기술해야 함(강사 블로그 참고)

class Person {}
class Cop extends Person {}
let cop = new Person();
let realCop = new Cop();
*/

class Animal {
  sound() {
    console.log("Parent: Animal Sound!!");
  }
}

class Dog extends Animal {
  // Function Overriding: Parent(Animal)에 있던 Func.(sound())를 Child(Dog)에서 재정의.
  sound() {
    super.sound(); // 추가로 부모 Func(sound()) 호출.
    console.log("Dog: BOW WOW!!");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Cat: Nya Ong!!!");
  }
}

let dog = new Dog();
let cat = new Cat();

// Parent(Animal)에 inherited되어 있는 Child(dog)인지 검사
console.log(dog instanceof Animal); // true
console.log(Child instanceof Animal); // false

// Polymorphism
// parameter에 입력한 variable이 Parent(Animal)에 상속된 Child라면 Func(sound())를 실행
function animalSound(animal) {
  if (animal instanceof Animal) {
    animal.sound();
  }
}
animalSound(dog);
animalSound(cat);
