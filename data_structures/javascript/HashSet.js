//Why use a HashSet?

//Use a hash set when you aren't really storing values, you're just storing the presence of absence of keys. 
// If you are just looking a set of numbers, consider using an array instead, which would take up more space for very large numbers,
//  but which would ultimately have an easier API and (in theory) faster better average run times if we consider the O(n) worst case for a HashMap

//Intersections, unions and differences/complements are also better peformed on an array, 
// beceause they allow for direct in-order traversal, allowing for O(Math.max(a,b)) comparisons on sorted arrays, 
// rather than O(a*b) comparisons for unsorted HashMaps



import HashTable from './HashTable';

class HashNode {
  constructor(key, value = true) {
    this.key = key;
    this.value = value;
  }
}

class HashSet extends HashTable {
  constructor() {
    super();
  }

  add(value) {
    const valueAsKey = this.checkKey(value);
    this.insert(value, true);
  }

  remove(value) {
    const valueAsKey = this.checkKey(value);
    this.insert(value, false);
  }

  contains(value) {
    if (this.size === 0) return false; 
    return this.key(value) ? true : false;
  }

  clone() {
    const newSet = new HashSet();
    this.keys().forEach(key => newSet.add(key));
    return newSet;
  }

  intersection(otherHashSet) {
    const newSet = new HashSet();
    const currentSetValues = this.values();
    for (let i = 0; i < currentSetValues.length; i++) {
      let currentValue = currentSetValues[i];
      if (otherHashSet.contains(currentValue)) {
        newSet.add(currentValue);
      }
    }
    return newSet;
  }

  union(otherHashSet) {
    const newSet = this.clone();
    const otherSetValues = otherHashSet.values();
    otherSetValues.forEach(value => newSet.add(value));
    return newSet;
  }

  isSubsetOf(otherHashSet) {
    const currentSetValues = this.values();
    currentSetValues.forEach(value => {
      if (otherHashSet.contains(value)) {
        return true;
      }
    });
    return false;
  }

  complement(otherHashSet) {
    const newSet = new HashSet();
    const currentSetValues = this.values();
    currentSetValues.forEach(value => {
      if (!otherHashSet.contains(value)) {
        newSet.add(value);
      }
    });

    otherHashSet.values().forEach(value => {
      if (!this.contains(value)) {
        newSet.add(value);
      }
    });
  }
}
