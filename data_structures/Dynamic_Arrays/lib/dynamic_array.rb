require_relative "static_array"

class DynamicArray
  include Enumerable

  attr_reader :length

  def initialize(capacity = 8)
    @store = StaticArray.new(capacity)
    @length = 0
    @capacity = capacity
  end

  # O(1)
  def [](index)
    check_index(index)
    @store[index]
  end

  # O(1)
  def []=(index, value)
    check_index(index)
    @store[index] = value
  end

  # O(1)
  def pop
    check_index(0)
    @length =- 1
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    resize! if @capacity == @length
    @store[@length] = val
    @length += 1
  end

  # O(n): has to shift over all the elements.
  def shift
    check_index(@length)
    @length =- 1
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    resize! if @capacity == @length
    self.each_with_index { |el, i| @store[i + 1]= el}
    @store[0] = val
    @length += 1
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    if index - 1 > @length || index < 0
      raise "index out of bounds"
    end
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    new_capacity = @capacity * 2
    new_store = StaticArray.new(new_capacity)
    self.each_with_index { |el, i| new_store[i] = el}

    @capacity = new_capacity
    @store = new_store
  end

  def each
    @length.times { |i| yield self[i] }
    self
  end
end
