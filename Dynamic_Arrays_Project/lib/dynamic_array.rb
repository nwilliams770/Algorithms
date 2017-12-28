require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize(capacity = 8)
    @store = StaticArray.new(capacity)
    @count = 0
  end

  def capacity
    @store.length
  end

  # O(1)
  def [](index)
   @store[index]
  end


  # O(1)
  def []=(index, value)
  end

  # O(1)
  def pop

  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
  end

  # O(n): has to shift over all the elements.
  def shift
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
  end


  def check_index(index)
    if index > capacity
      raise Exception.new("index out of bounds")
    end
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
  end
end
