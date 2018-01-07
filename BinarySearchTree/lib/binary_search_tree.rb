# There are many ways to implement these methods, feel free to add arguments 
# to methods as you see fit, or to create helper methods.
require_relative 'bst_node'

class BinarySearchTree
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
  end

  # helper method for #delete:
  def maximum(tree_node = @root)
    return nil unless tree_node

    if !(tree_node.right.nil?)
      return maximum(tree_node.right)
    end

    tree_node
  end

  def depth(tree_node = @root)
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
