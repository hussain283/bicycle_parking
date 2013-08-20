class HomeController < ApplicationController
  respond_to :html, :json
  
  def index
    respond_with(@parking_spots = ParkingSpot.search(request.location.ip).to_json);
  end
end
