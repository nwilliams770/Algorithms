# This class just dumbs down a regular Array to be statically sized.
class StaticArray
  def initialize(length)
    return Array.new(length)
  end

  # O(1)
  def [](index)
    return self[index]
  end

  # O(1)
  def []=(index, value)
    return self[index] = value
  end

  protected
  attr_accessor :store
end
