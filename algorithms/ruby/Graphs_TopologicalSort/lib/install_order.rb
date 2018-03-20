# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to

require_relative 'graph'
require_relative 'topological_sort'



def install_order(arr)
  vertices = {}
  independents= []

  arr.each do |pair|
    
    vertices[pair[0]] = Vertex.new(pair[0]) unless vertices.has_key?(pair[0])
    vertices[pair[1]] = Vertex.new(pair[1]) unless vertices.has_key?(pair[1])

    
    Edge.new(vertices[pair[0]], vertices[pair[1]])
  end

  (1..vertices.keys.max).each do |value|
    independents << value unless vertices.has_key?(value)
  end


  sorted = topological_sort(vertices.values).map {|vertex| vertex.value}
  
  independents + sorted
end
