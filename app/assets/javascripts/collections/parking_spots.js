BicycleParking.Collections.ParkingSpots = Backbone.Collection.extend({
  model: ParkingSpot,
  url: '/parking_spots',

  initialize: function(model, options) {
    this.center = options.center;
  }
});

