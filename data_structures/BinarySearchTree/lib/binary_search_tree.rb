# There are many ways to implement these methods, feel free to add arguments 
# to methods as you see fit, or to create helper methods.
require_relative 'bst_node'

class BinarySearchTree
  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(value)
    if @root.nil?
      @root = BSTNode.new(value)
    else
      self.class.insert!(@root, value)
    end
  end

  def find(value, tree_node = @root)
    return nil if tree_node.nil?
    if tree_node.value == value
      return tree_node
    elsif value < tree_node.value
      find(value, tree_node.left)
    else 
      find(value, tree_node.right)
    end
  end

  def delete(value)
    self.class.delete!(@root, value)
  end

  def self.delete!(node, value)
    return nil unless node

    if node.value == value
      return node.right unless node.left
      return node.left unless node.right

      new_parent = node.right
      new_parent.right = delete_min!(node.right)
      new_parent.left = node.left
      return new_parent
    elsif value < node.value
      node.left = delete!(node.left, value)
    else
      node.right = delete!(node.right, value)
    end

    node
  end

  def self.delete_min!(node)
    return nil unless node
    return node.right unless node.left

    node.left = delete_min!(node.left)
    node
  end


  # helper method for #delete:
  def maximum(tree_node = @root)
    return nil unless tree_node

    if !(tree_node.right.nil?)
      return maximum(tree_node.right)
    end

    tree_node
  end

  def minimum(tree_node = @root)
    return nil unless node

    if node.left
      return min(node.left)
    end

    node
  end

  def depth(tree_node = @root)
    return -1 unless tree_node
    left = 1 + depth(tree_node.left)
    right = 1 + depth(tree_node.right)
    left > right ? left : right
  end 

  def is_balanced?(tree_node = @root)
  end

  def in_order_traversal(tree_node = @root, arr = [])
  end

  def self.insert!(node, value)
    if node.nil?
      return BSTNode.new(value)
    elsif value <= node.value
      node.left = insert!(node.left, value)
    else
      node.right = insert!(node.right, value)
    end

    node
  end


  private
  # optional helper methods go here:

end
