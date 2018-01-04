class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = []
    if !(block_given?)
      prc = Proc.new { |el1, el2| -1 * (el1 <=> el2) }
    end
  end

  def count
    @store.length
  end

  def extract
    popped = @store.shift
    self.class.heapify_down(@store, 0)
    return popped
  end

  def peek
    return @store[0]
  end

  def push(val)
    @store[count] = val
    self.class.heapify_up(@store, count - 1)
  end

  public
  def self.child_indices(len, parent_index)
    indices = []

    if (2 * parent_index) + 2 < len
      indices << (2 * parent_index) + 1
      indices << (2 * parent_index) + 2
    else
      if (2 * parent_index) + 1 < len
        indices << (2 * parent_index) + 1
      end
    end

    indices
  end


  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    return (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    if !(block_given?)
      prc = Proc.new { |el1, el2|  (el1 <=> el2) }
    end

    heapified = false

    until heapified
      heapified = true

      if child_indices(len, parent_idx)[0].nil? && child_indices(len, parent_idx)[1].nil?
        return array
      elsif child_indices(len, parent_idx)[0].nil?
        comparator = array[child_indices(len, parent_idx)[1]]
        comp_idx = child_indices(len, parent_idx)[1]
      elsif child_indices(len, parent_idx)[1].nil?
        comparator = array[child_indices(len, parent_idx)[0]]
        comp_idx = child_indices(len, parent_idx)[0]
      elsif array[child_indices(len, parent_idx)[1]] > array[child_indices(len, parent_idx)[0]]
        comparator = array[child_indices(len, parent_idx)[0]]
        comp_idx = child_indices(len, parent_idx)[0]
      else 
        comparator = array[child_indices(len, parent_idx)[1]]
        comp_idx = child_indices(len, parent_idx)[1]
      end


      if prc.call(array[parent_idx], comparator) == 1
        array[parent_idx], array[comp_idx] = array[comp_idx], array[parent_idx]
        heapified = false
        parent_idx = comp_idx
      end
    end
    return array
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    if !(block_given?)
      prc = Proc.new { |el1, el2|  (el1 <=> el2) }
    end
    heapified = false

    until heapified
      heapified = true

      if child_idx == 0
        return array
      else
        comparator = array[parent_index(child_idx)]
        comp_idx = parent_index(child_idx)
      end

      if prc.call(array[child_idx], comparator) == -1
        array[child_idx], array[comp_idx] = array[comp_idx], array[child_idx]
        heapified = false
        child_idx = comp_idx
      end
    end
  end
end
