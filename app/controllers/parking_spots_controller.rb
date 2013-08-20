class ParkingSpotsController < ApplicationController
  respond_to :html, :json

  def search
    respond_with(@parking_spots = ParkingSpot.search(params[:query]).to_json)
  end
end