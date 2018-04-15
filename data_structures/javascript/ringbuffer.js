// Why Circular Queue (e.g. Ring Buffer)
// Allows us to continuouslya add elements to queue if elements have been removed.
// In a normal queue, at least in a language like C, a queue is full when we have assigned something to the final location 
// in the static memory alloted to the array, we run into an error. A dynamic array or circular queue 
// (implemented with an array) allows us to look for empty slots at the beginning of the array, 
// if they exist, so that we are not constrained by the original memory allocation.
// We reassign to the begining of the array with a simple modulo operation. 

// Use this ADT where?
// We need fixed memory, but the used capacity of that memory varies over time.
// When we don't mind erasing old memory in queue if queue if full, or comfortable refusing to make space when queue is full

// Buffers in CS
//Buffers used as data structurest that house data temporarily as it is moved from one physical location in memory to another
// Buffers are useful because receipt and process rates for data can vary; 
// typically, things are received more quickly than they are processed, or they are received out of order and they must be held and sorted before processing



class RingBuffer {
  constructor(capacity) {
    this.elements = new Array(capacity || 50);
    this.first = 0;
    this.size = 0;
  }

  // O(1)
  capacity() {
    return this.elements.length;
  }

  // O(1)
  size() {
    return this.size;
  }

  // O(1)
  isEmpty() {
    return this.size === 0;
  }

  // O(1)
  isFull() {
    return this.size === this.capacity();
 }

 peek() {
   if (this.isEmpty()) {
     throw new Error('Cannot peek into empty Ring Buffer');
   } else {
     return this.elements[this.first];
   }
 }

 peekToPosition(index) {
   if (index > this.size()) {
     throw new Error(`Position ${index} does not exist in Ring Buffer of size ${this.size}`);
   }

   const absPosition = Math.min(this.first + index, this.capacity());

   const firstHalf = this.elements.slice(this.first, absPosition);
   const secondHalf = this.elements.slice(0, index - firstHalf.length);

   return absPosition < this.capacity() ? firstHalf : firstHalf + secondHalf;
 }

 dequeue() {
  const dequeuedEl = this.peek();

  this.size--;
  this.first = (this.first + 1) % this.capacity();

  return dequeuedEl;
 }

 dequeueToPosition(index) {
   const dequeuedEls = this.peekToPosition(index);

  this.size -= index;
  this.first = (this.first + index) % this.capacity();
 }

 enqueue(element) {
   this.end = (this.first + this.size()) % this.capacity();

   this.elements[this.end] = element;
   if (this.isFull()) {
     this.first = (this.first + 1) % this.capacity;
   } else {
     this.size++;
   }
   return this.size();
 }



}