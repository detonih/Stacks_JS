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

    // Declara o tamanho do array igual o tamanho do topo da pilha, assim todos os elementos a mais são removidos
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