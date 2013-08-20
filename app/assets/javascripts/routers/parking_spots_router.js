BicycleParking.Routers.ParkingSpots = Backbone.Router.extend({
  routes: {
    "":"index"
  },

  index: function(){
    this.indexView = new BicycleParking.Views.ParkingSpotsMapView({ collection: BicycleParking.parkingSpots });
    this.indexForm = new BicycleParking.Views.ParkingSpotsSearchFormView();
    this.indexView.render();
    $('.bicycle_parking').prepend(this.indexForm.render().$el);
  }
});
