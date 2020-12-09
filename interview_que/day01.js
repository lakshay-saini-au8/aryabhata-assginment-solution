// function sayHi() {
//   var name = "Lydia";
//   console.log(name);
//   let age = 21;
// }

// sayHi();

// A: Lydia and undefined
// B: Lydia and ReferenceError
// C: ReferenceError and 21
// D: undefined and ReferenceError

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
setTimeout(() => console.log(1), 1);
setTimeout(() => console.log(3), 2);
setTimeout(() => console.log(2), 1);

// console.log(i);
// i -> i=3
// i->i=3
// i->i=3
// i-3>=

// console.log(i);

//   A: 0 1 2 and 0 1 2
//   B: 0 1 2 and 3 3 3
//   C: 3 3 3 and 0 1 2

// var radius = 20;

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());
//   A: 20 and 62.83185307179586
//   B: 20 and NaN
//   C: 20 and 63
//   D: NaN and 63

+true;
!"Lydia";
// A: 1 and false
// B: false and NaN
// C: false and false

// const bird = {
//   size: "small",
// };

// const mouse = {
//   name: "Mickey",
//   small: true,
// };
// //   A: mouse.bird.size is not valid
// //   B: mouse[bird.size] is not valid
// //   C: mouse[bird["size"]] is not valid
// //   D: All of them are valid
// console.log(mouse.bird.size);
// console.log(mouse[bird.size]);
// console.log(mouse[bird["size"]]);
// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);
// // A: true false true
// // B: false false true
// // C: true false false
// // D: false true true

// class Chameleon {
//   colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = "green" } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: "purple" });
// console.log(freddie.colorChange("orange"));

// A: orange
// B: purple
// C: green
// D: TypeError

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = "Lydia";
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;
// A: "Lydia" 21 ["", " is ", " years old"]
// B: ["", " is ", " years old"] "Lydia" 21
// C: "Lydia" ["", " is ", " years old"] 21

// function getAge(...args) {
//   console.log(typeof args);
// }
// console.log("string");
// getAge(21);
// // A: "number";
// // B: "array";
// // C: "object";
// // D: "NaN";

function sayHi() {
  return ((name) => name)("Lakshay");
}

console.log(sayHi());

0;
new Number(0);
("");
(" ");
new Boolean(false);
undefined;

// console.log(false === false)

/*
falsy values

undefined
false
0
""
null
-0
NaN
0n

*/

console.log(typeof typeof 1);

/*
primitive types

string 
number
object
undefined
null
boolean
symbol
*/

[
  [0, 1],
  [2, 3],
].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);

const data = setInterval(() => console.log("Hi"), 1000);
console.log(data);
clearInterval(data);
console.log(data);

!!null;
!!"";
!!1;

function* generator(i) {
  yield i;
  return i * 2;
}

const gen = generator(10);
console.log(gen.next());
console.log(gen.next());

let person = { name: "Lydia" };
const members = [person];
person = null;
console.log(members);
