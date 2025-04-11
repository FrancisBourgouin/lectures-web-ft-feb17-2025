# Motherboard => Logic Boards
# Not functions => Methods!

def say_hello(name)
  puts "Hello #{name}!"
end

say_hello 'Zoey the dog!'

def say_hello_again(name, is_morning)
  if is_morning
    puts "Good morning #{name}!"
  else
    puts "Good evening #{name}!"
  end
end

def add_two_numbers(a, b)
  # return 'mwahahahha'

  a + b
end

puts add_two_numbers 5, 4
