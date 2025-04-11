# What's a class ?

# A group of students
# A blueprint

class Potato
  def initialize(title, name, type, is_super)
    @name = name
    @type = type
    @is_super = is_super
    @title = title
  end

  attr_writer :name
  attr_reader :type

  def name
    @title + ' ' + @name
  end

  def super?
    @is_super
  end
end

patator = Potato.new('Dr', 'Patator', 'Irish Cobbler', false)

p patator.name
patator.name = 'Patator 2000'

p patator.super?

# Website!

# /dashboard - available to logged in users
# /admin - available to admins only
# /admin/dashboard - public
# /urls - public
# /urls/:url_id - available to logged in users

# Blocklist => every is public by default, then you apply restrictions
# AllowList => everything is private by default, then you apply exceptions
