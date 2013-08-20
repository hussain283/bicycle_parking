BicycleParking.Views.ParkingSpotsMapView = Backbone.View.extend({

  initialize: function(){
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();

    this.setCenter(this.collection.center);

    this.map = new google.maps.Map($('.parking-map')[0], {
      center: this.center,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    this.collection.bind('refresh', this.refresh, this);
    this.collection.bind('reset', this.render, this);
  },

  render: function(){

    this.removeMarkers();

    this.markers = [];
    var self = this;

    this.collection.each(function(parkingSpot){
      var marker = self.newMarker(parkingSpot);
      self.markers.push(marker);
      marker.setMap(self.map);
    });

    if (this.markers.length > 0) {
      this.renderClosestRoute();
    }
    
    return this
  },

  refresh: function(data){
    this.setCenter(data.center);
    this.map.setCenter(this.center);
    this.collection.reset(data.parkingSpots);
  },

  newMarker: function(parkingSpot){
    return new google.maps.Marker({
      position: new google.maps.LatLng(parkingSpot.get('latitude'),parkingSpot.get('longitude'))
    });
  },

  removeMarkers: function(){
    _.each(this.markers,function(marker){ marker.setMap(null) });
  },

  setCenter: function(center){
    this.center = new google.maps.LatLng(center[0], center[1]);
  },

  renderClosestRoute: function() {
    var request = {
      origin: this.center,
      destination: this.markers[0].getPosition(),
      travelMode: google.maps.DirectionsTravelMode.WALKING
    };
    
    var self = this;
    this.directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {

        self.directionsDisplay.setDirections(response);
        self.directionsDisplay.setMap(self.map);
      }
    });
  }
});