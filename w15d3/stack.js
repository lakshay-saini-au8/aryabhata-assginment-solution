/*
Implement a class Stack which emulates a LIFO data structure in JS. This class can internally use
arrays or objects (linked nodes) to achieve the following Stack operations.
- push(elem) => add and return element on top
- pop() => remove and return element on top
- top() => only return element on top

*/

function Stack() {
  this.stack = [];
}
Stack.prototype.push = function (data) {
  this.stack.push(data);
};
Stack.prototype.pop = function () {
  return this.stack.pop();
};
Stack.prototype.peek = function () {
  return this.stack[this.stack.length - 1];
};

stack1 = new Stack();
stack1.push(1);
stack1.push(2);
stack1.push(3);
stack1.push(4);
stack1.push(5);
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.peek());
