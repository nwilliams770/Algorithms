class HashNode {
  constructor(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null;
  }
}

class HashTable {
  constructor() {
    this.size = 0;
    this.buckets = [];
    this.numberOfBuckets = this.buckets.length;
  }

  //O(key.length)
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key[i].charCode;
    }

    let bucket = total % this.numberOfBuckets;
    return bucket;
  }

  //O(1)
  checkKey(key) {
    if (typeof key === "object" || key === null) {
      throw new TypeError("Not permitted key type of object, null");
    }

    return typeof key === "string" ? key : key.toString();
  }

  //O(key.length + this.size)
  insert(key, value) {
    const keyString = this.checkKey(key);
    const targetBucket = this.hash(key);
    let currentNode = this.buckets[targetBucket];

    if (!currentNode) {
      currentNode = new HashNode(keyString, value);
      this.buckets[targetBucket] = currentNode;
      this.size++;
    } else if (currentNode.key === keyString) {
      currentNode.value = value;
    } else {
      while (currentNode.next) {
        if (currentNode.key === keyString) {
          currentNode.value = value;
          return;
        }
        currentNode = currentNode.next;
      }
      currentNode.next = new HashNode(keyString, value);
      this.size++;
    }
  }


  get(key) {
    const keyString = this.checkKey(key);
    const targetBucket = this.hash(key);
    let currentNode = this.buckets[targetBucket];

    if (!currentNode) {
      return null;
    } else {
      while (currentNode) {
        if (currentNode.key === keyString) {
          return currentNode.value;
        }
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  remove(key) {
    const keyString = this.checkKey(key);
    const targetBucket = this.hash(key);
    let currentNode = this.bucket[keyString],
        previousNode,
        nodeToDelete,
        deletedNode;
    
    if (!currentNode) {
      return null;
    } else if (currentNode.key === keyString) {
      nodeToDelete = currentNode;
      this.buckets[targetBucket] = currentNode.next;
      deletedNode = nodeToDelete;
      nodeToDelete = null;
      return deletedNode;
    } else {
      while (currentNode) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        if (currentNode && currentNode.key === keyString) {
          nodeToDelete = currentNode;
          previousNode.next = currentNode.next;
          deletedNode = nodeToDelete;
          nodeToDelete = null;
          return deletedNode;

        }
      }
    }
    return null;
  }

  keys() {
    const keysArr = [];

    for (let i = 0; i < this.numberOfBuckets; i++) {
      let currentNode = this.buckets[i];
      while (currentNode) {
        keysArr.push(currentNode.key);
        currentNode = currentNode.next;
      }
    }
    return keysArr;
  }

  values() {
    const valuesArr = [];

    for (let i = 0; i < this.numberOfBuckets; i++) {
      let currentNode = this.buckets[i];
      while (currentNode) {
        valuesArr.push(currentNode.value);
        currentNode = currentNode.next;
      }
    }
    return valuesArr;
  }
}