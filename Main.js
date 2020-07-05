const StackHandler = require('./StackHandler');

const handler = new StackHandler();

const stack = handler.createStack(10);

console.log(stack);

for(let i = 0; i <= 15; i++) {
  
  handler.push(i);

}

console.log(handler.topOfStackIndex);
console.log(stack);

for(let i = 0; i <= 15; i++) {
  
  handler.pop();

}

console.log(handler.topOfStackIndex);
console.log(stack);
