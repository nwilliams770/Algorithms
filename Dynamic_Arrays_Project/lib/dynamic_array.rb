require_relative "static_array"

class DynamicArray
  include Enumerable

  def initialize(capacity = 8)
    @store = StaticArray.new(capacity)
    @count = 0
  end

  def capacity
    @store.length
  end

  # O(1)
  def [](index)
   check_index(index)
   @store[index]
  end


  # O(1)
  def []=(index, value)
    check_index
    @store[index] = value
  end

  # O(1)
  def pop
    return nil if @count == 0
    last_item = @store[(@count - 1) % capacity]
    @count =- 1
    last_item
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    resize! if capacity == @count
    @store[@count % capacity] = val
    @count += 1
    self
  end

  # O(n): has to shift over all the elements.
  def shift
    return nil if @count == 0
    first_item = @store[0]
    @count =- 1
    first_item
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    resize! if capacity == @count

  end


  def check_index(index)
    if index > capacity
      raise "index out of bounds"
    end
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    new_store = StaticArray.new(capacity * 2)
    self.each_with_index { |el, i| new_store[i] = el}

    @store = new_store
  end

  def each
    @count.times { |i| yield self[i] }
    self
  end
end
