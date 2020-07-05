class StackHandler {
  
  constructor() {

    this.topOfStackIndex = -1;

    this.fixedSizeStack;

    this.stack;

  }

  createStack(stackSize) {
    
    this.fixedSizeStack = stackSize;

    return this.stack = new Array(stackSize);
 
  }

  push(elem) {

    if(this.isFull()) {

      return "Stack is full!"

    }

    this.topOfStackIndex++
    
    this.stack[this.topOfStackIndex] = elem;
    
  }
  
  pop() {
    if(this.isEmpty()) {

      return "Stack is empty!"

    }
    
    const element = this.stack[this.topOfStackIndex];
    
    this.topOfStackIndex--;

    // Remove the surplus elements of the array by defining its size
    if(this.topOfStackIndex === -1) {
  
      this.stack.length = 0;

    } else {

      this.stack.length = this.topOfStackIndex;

    }

    return element;

  }
  
   isEmpty() {
        
    return (this.topOfStackIndex === -1);

  }
  
   isFull() {
    
    const tamanhoCorrigido = this.fixedSizeStack -1;
    
    if(this.topOfStackIndex === tamanhoCorrigido) {
      return true;
    } else {
      return false
    }
  
  }
  
   top() {

    if(this.isEmpty()) {

      return "Stack is empty!"

    }

    return this.stack[this.topOfStackIndex];
  
  }

}

module.exports = StackHandler;