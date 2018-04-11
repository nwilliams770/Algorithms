// Singly vs Doubly
// SLL carry less memory
// Insertion and deletion at known position is O(n) for SLL and DLL
// If search performance is priority, DLL better; if we care about space, SLL better
// In B-trees and heap trees, we need DLL to rearrange nodes

class DoublyLinkedNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pushBack(data) {
    const newNode = new DoublyLinkedNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return data;
  }

  findNodeAtIndex(index) {
    if (index > this.length - 1 || index < 1 || this.length === 0) {
      throw new RangeError(`Index ${index} is not available in LinkedList of length ${this.length}`);
    }

    let currentNode = this.head,
        i = 0;

    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }
    return currentNode;
  }

  removeAtIndex(index) {
    let currentNode, prevNode, nextNode, nodeToDelete, deletedNode, currentIndex;
    const median = Math.floor(this.length / 2 );

    if (index === 0) {
      nodeToDelete = this.head;
      this.head = nodeToDelete.next;
      this.head.prev = null;
      deletedNode = nodeToDelete;
      nodeToDelete = null;
      return deletedNode.data;
    } else if (index === this.length - 1) {
      nodeToDelete = this.tail;
      this.tail = nodeToDelete.prev;
      this.tail.next = null;
      deletedNode = nodeToDelete;
      nodeToDelete = null;
      return deletedNode.data;
    }

    if (index >= median) {
      currentNode = this.tail;
      currentIndex = this.length - 1;

      while (currentIndex > index) {
        currentNode = currentNode.prev;
        currentIndex--;
      }
    } else {
      currentNode = this.head;
      currentIndex = 0;

      while (currentIndex < index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
    }

    prevNode = currentNode.prev;
    nextNode = currentNode.next;
    nodeToDelete = currentNode;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    deletedNode = nodeToDelete;
    nodeToDelete = null;
    return deletedNode.data;
  }

  findNodeWithData(data) {
    let currentNode = this.head;

    if (this.length === 0) {
      return null;
    }

   while (currentNode.next && currentNode.next.data !== data) {
     currentNode = currentNode.next;
   }

   if (currentNode.next.data === data) {
     return currentNode.next.data;
   } else {
     return null;
   }
  }

  removeNodeWithData(data) {
    let currentNode = this.findNodeWithData(data),
        nextNode = null,
        prevNode = null,
        nodeToDelete = null,
        deletedNode = null;
    
    if (currentNode) {
      nodeToDelete = currentNode;
      nextNode = currentNode.next;
      prevNode = currentNode.prev;
      nextNode.prev = prevNode;
      prevNode.next = nextNode;

      deletedNode = nodeToDelete;
      nodeToDelete = null;
      return deletedNode.data;
    } else {
      return null;
    }
  }
}