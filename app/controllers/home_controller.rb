class HomeController < ApplicationController
  respond_to :html, :json
  
  def index
    p "*" * 100
    puts request.location.ip
    respond_with(@parking_spots = ParkingSpot.search(request.location.ip).to_json);
  end
end
