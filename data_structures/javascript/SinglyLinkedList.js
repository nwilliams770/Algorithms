// Why? 
//No need for fixed memory allocation because nodes are dynamically scattered throughout memory


// When?
// If we don't know how much space we'll need, this structure is more logical than an array, which requires we allocate fixed amount of memory 
// and is costly to resize

// Problem with linked lists is that we potentially store a lot of unncessary data by storing the pointers. 
// Also, whereas an Array stores data continguously, Linked List nodes are scattered throughout memory and linked by pointers, could affect performance

//Adding els to head of list is easy whereas with an array, it requires we shift position of all subsequent elements within it
//Adding an element to the end of an array is an O(1) operation if we're using a dynamic ring buffer that tracks the current last-filled element, but O(current number of elements) if we do not have that ring buffer. Similarly, we have O(current number of elements) to insert into a singly linked list, and O(1) to insert at the end of an doubly-linked list

// Takeaway: Arrays faster to read due to O(1) random access look up, Linked Lists faster to write and delete

// When not to use?
// If we want constant look up, should use an array.

class SinglyLinkedNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  //O(1)
  size() {
    return this.length;
  }
  //O(1)
  empty() {
    return !(this.head);
  }

//O(index)
 valueAt(index) {
  let currentNode = this.head;
  let currentPosition = 0;

  if (index > this.length || index < 0 || this.length === 0) {
    throw new RangeError(`Index ${index} is not available in LinkedList of length ${this.length}`);
  }

  while (currentPosition < index) {
    currentNode = currentNode.next;
    currentPosition++;
  }

  return currentNode;

 }

  //O(1)
  pushFront(data) {
   const newNode = new SinglyLinkedNode(data);
   let currentNode = this.head;

   if (!this.head) {
     this.head = currentNode;
   } else {
     newNode.next = this.head;
     this.head = newNode;
   }
  this.length++; 
  return newNode.data;
  }

  //O(1)
  popFront() {
   if (this.empty()) throw new Error(`Cannot remove items from Linked List of length 0`);
   const removedNode = this.head;
   this.head = this.head.next;
   this.length--;
   return removedNode.data;
  }

  //O(this.length)
  pushBack(data) {
    const newNode = new SinglyLinkedNode(data);
    let currentNode = this.head;

    if (!this.head) {
      this.head = currentNode;
      this.length++;
    } else {
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

    this.length++;    
    return newNode.data;
  }

  //O(this.length)
  popBack() {
    if (this.empty()) throw new Error(`Cannot remove items from Linked List of length 0`);    
    let currentNode = this.head,
    i = 0;
    const removedNode = currentNode.next;    
    // we want to get to the second to last node AND we have zero-indexing hence this.length - 2!
    while (i < this.length - 2) {
      currentNode = currentNode.next;
      i++;
    }
    currentNode.next = null;
    this.length--;
    return removedNode.data;
  }

  //O(1)
  front() {
    this.head ? this.head.data : null;
  }

  //O(this.length)
  back() {
    if (this.empty()) return null;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode.data;
  }

  //O(index)
  insert(index, value) {
    if (index < 0) {
      throw new RangeError(`Cannot insert values at a negative index`);
    }

    let currentNode = this.head,
    i = 0;

    while (i < this.length) {
      currentNode = currentNode.next;
      i++;
    }
    currentNode.data = value;
    this.length++;
    return value;
  }

  erase(index) {
    if (index < 0 || index > this.length || this.length === 0) {
      throw new RangeError(`Index ${index} is not available in LinkedList of length ${this.length}`);
    }
    if (index === 0) return this.popFront();

    let currentNode = this.head,
        i = 0,
        NodeToDelete = null,
        previousNode = null;

    while (i < index - 1) {
      previousNode = currentNode.next;
      i++;
    }

    previousNode = currentNode;
    NodeToDelete = previousNode.next;
    previousNode.next = NodeToDelete.next;
    NodeToDelete = null;
  }
  
  //O(n)
  valueFromNEnd(n) {
    if (n < 0 || n > this.length || this.length === 0) {
      throw new RangeError(`${n} position is not available in LinkedList of length ${this.length}`);
    }
    let currentNode = this.head,
        i = 0;
    while (i < n - 1) {
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }


  //O(this.length)
  removeWithData(data) {
    let currentNode = this.head,
        previousNode = null,
        deletedNode = null;
    
    if (!currentNode) {
      return null;
    }

    while (currentNode.next && currentNode.next.data !== data) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode.data === data) {
      previousNode.next = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      this.length--;
      return deletedNode.data;
    } else {
      return null;
    }
  }
}