# == != && ||

some_user = {
  name: 'Bob',
  email: 'bob@bob.com',
  admin?: true
}

# if

if some_user[:admin?]
  puts "You're an admin!"
  puts 'Woohoo!'
end

puts "You're an admin!" if some_user[:admin?]

unless some_user[:admin?]
  puts "You're not authorized to see this message"
  puts 'GET OUT!'
end

puts "You're not authorized to see this message" unless some_user[:admin?]

if some_user[:admin?]
  puts "You're an admin!"
  puts 'Woohoo!'
elsif some_user[:admin?].nil?
  puts "You're without any admin validation whaaatttt."
else
  puts "You're not authorized to see this message"
  puts 'GET OUT!'
end


p 5 <=> 10



# if test

# elsif

# else

# end

# unless

# <

# 5
# 10

# >
# ==
# <=>
