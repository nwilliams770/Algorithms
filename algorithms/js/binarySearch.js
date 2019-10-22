function binarySearchRecursivea(array, target) {
  if (!array.length) {
    return null;
  } else if (array.length === 1) {
    return array[0] === target ? 0 : null;
  }

  let mid = Math.floor(array.length)

  if (array[mid] === target) {
    return mid;
  } else if (target > array[mid]) {
    const result = binarySearchRecursivea(array.slice(mid + 1), target);
    return result === null ? null : mid + result + 1;
  } else {
    return binarySearchRecursivea(array.slice(0, mid), target);
  }
}

function binarySearchIterative(array, target) {
  let start = 0,
      end = array.length - 1,
      middle;
  while (start <= end) {
    if (start === end) {
      middle = start;
    } else {
      // compensating for if we go into right half of the array
      middle = Math.floor((end - start) / 2 + start);
    }

   if (array[middle] === target) return middle;

   if (target < array[middle]) {
     end = middle - 1;
   } else {
     start = middle + 1;
   }
  }

  return null;
      
}