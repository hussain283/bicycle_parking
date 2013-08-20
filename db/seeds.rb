# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Environment variables (ENV['...']) can be set in the file config/application.yml.
# See http://railsapps.github.io/rails-environment-variables.html

require 'open-uri'
require 'json'

ParkingSpot.destroy_all

spots = JSON.parse(open('http://data.sfgov.org/resource/w969-5mn4.json').read)


spots.each do |spot|
  location = JSON.parse(spot['location_column']['human_address'])
  ParkingSpot.create(name: spot['location_name'],
                  address: location['address'].titleize,
                  city: location['city'].titleize,
                  state: location['state'],
                  latitude: spot['latitude'],
                  longitude: spot['longitude'])
end