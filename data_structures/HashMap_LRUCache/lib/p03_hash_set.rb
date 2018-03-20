require_relative 'p02_hashing'

class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    if self.include?(key)
      return false
    else
      self[key.hash] << key
      @count += 1
      resize! if num_buckets < @count
    end
  end

  def include?(key)
    self[key.hash].include?(key)
  end

  def remove(key)
    return nil unless self.include?(key)
    self[key.hash].delete(key)
  end

  private

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    prev_store = @store
    @store = Array.new(num_buckets * 2) { Array.new }

    @count = 0
    prev_store.flatten.each { |num| insert(num) }
  end
end
