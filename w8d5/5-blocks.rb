# Blocks!

# YIELD
# Picking 5 baskets of raspberries will yield 10 pots of jam
list_of_names = %w[Jumpei Vikki Alejandra]

def prettify_output
  puts '🦜🦜🐔🐔🦜🦜🐔🐔🐔🦜🦜🦜'
  puts yield
  puts '🦜🦜🐔🐔🦜🦜🐔🐔🐔🦜🦜🦜'
end

prettify_output do
  list_of_names
end
