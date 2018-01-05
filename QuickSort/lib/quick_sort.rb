class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.length <= 1
    pivot = array[0]

    left, right = [], []
    (1...array.length).each do |idx|
      if array[idx] <= pivot
        left << array[idx]
      else
        right << array[idx]
      end
    end
    
    sort1(left) + [pivot] + sort1(right)
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    return array if length <= 1
    pivot_idx = partition(array, start, length, &prc)

    left_length = pivot_idx - start
    right_length = length - 1 - left_length

    sort2!(array, 0, left_length, &prc)
    sort2!(array, pivot_idx + 1, right_length, &prc)

    array
  end

  def self.partition(array, start, length, &prc)
   prc ||= Proc.new {|el1, el2| el1 <=> el2 }

   divider = start + 1
   (divider...(start + length)).each do |idx|
      next unless prc.call(array[start], array[idx]) > 0
      array[divider], array[idx] = array[idx], array[divider]
      divider += 1
   end
   
   pivot_idx = divider - 1
   array[start], array[pivot_idx] = array[pivot_idx], array[start]
   pivot_idx
  end
end
