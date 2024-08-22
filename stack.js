// question 1=>two-pointer
// function hasSum(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     const sum = arr[left] + arr[right];

//     if (sum === target) {
//       return true;
//     } else if (sum < target) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return false;
// }
// let array = [3, 4, 5, 7, 8];
// console.log(hasSum(array, 7));

// question 2=> stack without using builtin
// class Stack {
//   constructor() {
//     this.item = [];
//     this.top = -1;
//   }

//   push(element) {
//     this.top++;
//     this.item[this.top] = element;
//   }

//   pop() {
//     if (this.top < 0) {
//       console.log("Stack is underflow");
//       return undefined;
//     }
//     let popedItem = this.item[this.top];
//     this.top--;
//     this.item.length--;
//     return popedItem;
//   }

//   peek() {
//     if (this.top < 0) {
//       console.log("Stack is underflow");
//       return undefined;
//     }
//     return this.item[this.top];
//   }

//   isEmpty() {
//     return this.top < 0;
//   }
// }

// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// console.log(stack.item);
// console.log(stack.pop());
// console.log(stack.item);
// console.log(stack.peek());
// console.log(stack.isEmpty());

// question 3=>stack with object
class Stack1 {
  constructor() {
    this.item = {};
    this.top = -1;
  }

  push(element) {
    this.top++;
    this.item[this.top] = element;
  }

  pop() {
    if (this.top < 0) {
      return "Stack is underflow";
    }
    let popedItem = this.item[this.top]; // top poped
    delete this.item[this.top];
    this.top--;
    return popedItem;
  }

  peek() {
    if (this.top < 0) {
      return "Stack is underflow";
    }
    return this.item[this.top];
  }

  isEmpty() {
    return this.top < 0;
  }
}

let stack1 = new Stack1();
stack1.push(10);
stack1.push(20);
stack1.push(30);
stack1.push(40);
stack1.push(50);
console.log(stack1.item);
console.log(stack1.pop());
console.log(stack1.item);
console.log(stack1.peek());
console.log(stack1.isEmpty());

// question 4=> stack with linklist
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack2 {
  constructor() {
    this.top = null;
  }

  push(element) {
    let newNode = new Node(element);
    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
  }
  pop() {
    if (!this.top) {
      return undefined;
    }
    let poppedElement = this.top.data;
    this.top = this.top.next;
    return poppedElement;
  }

  peek() {
    if (!this.top) {
      return undefined;
    }
    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }
}

let stack2 = new Stack2();
stack2.push(10);
stack2.push(20);
stack2.push(30);
stack2.push(40);
console.log(stack2.pop());
console.log(stack2.pop());
console.log(stack2.pop());
console.log(stack2.pop());
console.log(stack2.peek());
console.log(stack2.isEmpty());

// question 4 = >revers in stack

// revers the string uding stack

function reversThis(str) {
  let stack = [];
  for (let char of str) {
    console.log(char);
    stack.push(char);
    console.log(stack);
  }
  //   now we go to revers the string
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
    console.log(reversedStr);
    console.log(str[i]);
  }
  return reversedStr;
    // while (stack.length > 0) {
    //   reversing += stack.pop();
    //   console.log(reversing);
    // }
}
reversThis("janvi");