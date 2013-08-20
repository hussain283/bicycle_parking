BicycleParking = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    this.parkingSpots = new this.Collections.ParkingSpots(data.parkingSpots, { center: data.center });
    this.router = new this.Routers.ParkingSpots();
    Backbone.history.start({pushState: true});
    return this;
  }
};
