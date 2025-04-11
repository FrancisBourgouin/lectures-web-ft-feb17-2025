# EVERYTHING IS AN OBJECT

# Numbers

p 0.to_s

# Strings & ' vs " & #{}

some_string = 'Hello!'
some_string_literal = "Hello! #{5 + 9}"

p some_string.upcase!
p some_string

# Puts vs P

p some_string
puts some_string

# Array

list_of_places_to_visit = %w[Argentina Ireland France Sweden]
visited_places = %w[Argentina Ireland France]

remaining_places_to_visit = list_of_places_to_visit - visited_places

p remaining_places_to_visit


a_bunch_of_questions = %w[q1 q2 q3 q4 q5]

p a_bunch_of_questions.shuffle

p a_bunch_of_questions.empty?



# undefined, null, nil

nil

bob = nil