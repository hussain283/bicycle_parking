class ParkingSpot < ActiveRecord::Base
  attr_accessible :name, :address, :city, :state, :latitude, :longitude

  validates :name, :address, :city, :state, :latitude, :longitude, presence: true

  geocoded_by :full_address

  def self.search(query)
    coordinates = Geocoder.coordinates(query);
    {center: coordinates, parkingSpots: self.near(coordinates,0.2).limit(5)}
  end

  def full_address
    self.address + ' ' + self.city + ' ' + self.state
  end
end
