# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bid.delete_all
Auction.delete_all
User.delete_all

PASSWORD = "123"
NUM_OF_USERS = 20
NUM_OF_AUCTIONS = 40

super_user = User.create(
  first_name: "Kent",
  last_name: "Cheung",
  email: "kentcheung2000@yahoo.com",
  password: PASSWORD,
  is_admin: true
)

NUM_OF_USERS.times do |num|
  full_name = Faker::TvShows::SiliconValley.character.split(' ')
  first_name = full_name[0]
  last_name = full_name[1]
  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name}.#{last_name}-#{num}@codecore.ca",
    password: 'codecore',
    is_admin: false
  )
end

users = User.all


NUM_OF_AUCTIONS.times do
  created_at = Faker::Date.between(from: 100.days.ago, to: Date.today)
  a = Auction.create({
    title: Faker::Cannabis.strain,
    description: Faker::Cannabis.health_benefit,
    current_price: rand(100_000),
    end_at: Faker::Date.forward(days: 100),
    reserve_price: rand(100_000),
    reserve_price_met: false,
    created_at: created_at,
    updated_at: created_at,
    user: users.sample
  })

  if a.valid?
    rand(0..10).times.each do
      Bid.create(
        bid_price: rand(100_000),
        bid_date: created_at = Faker::Date.between(from: 100.days.ago, to: Date.today),
        auction: a,
        user: users.sample
      )
    end
  end
end

puts "Created #{User.count} users"
puts "Created #{Auction.count} auctions"
puts "Created #{Bid.count} bids"
puts "Login as admin with #{super_user.email} and password of '#{PASSWORD}'!"