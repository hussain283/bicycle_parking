class HomeController < ApplicationController
  respond_to :html, :json
  
  def index
    ip_address = '2662 22nd St, San Francisco, CA'
    respond_with(@parking_spots = ParkingSpot.search(ip_address).to_json);
  end
end
