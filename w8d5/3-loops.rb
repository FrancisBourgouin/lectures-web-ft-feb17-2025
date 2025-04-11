list_of_names = %w[Jumpei Vikki Alejandra]

# each

list_of_names.each do |name|
  puts "Hello #{name}"
end

# each_with

list_of_names.each_with_index do |name, index|
  puts "Hello #{name} at position #{index}"
end

# for

for name in list_of_names do
  puts "Hello #{name}"
end

# .times

10.times do |count|
  puts "WAZZAAAAA #{count}"
end

# .upto

20.upto(37) do |value|
  puts value
end


37.downto(20) do |value|
  puts value
end