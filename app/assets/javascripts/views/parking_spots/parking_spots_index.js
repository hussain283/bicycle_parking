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
      this.renderRoute(this.center, this.markers[0].getPosition());
    }
    
    return this
  },

  refresh: function(data){
    this.setCenter(data.center);
    this.map.setCenter(this.center);
    this.collection.reset(data.parkingSpots);
  },

  newMarker: function(parkingSpot){
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(parkingSpot.get('latitude'),parkingSpot.get('longitude')),
      title: parkingSpot.escape('address'),
      icon: {url: 'http://www.clker.com/cliparts/Q/C/c/P/X/3/black-sign-bike-th.png', scaledSize: new google.maps.Size(40,40) }
    });
    var self = this;
    google.maps.event.addListener(marker, 'click', function() {
      self.renderRoute(self.center, this.getPosition());
    });

    return marker;
  },

  removeMarkers: function(){
    _.each(this.markers,function(marker){ marker.setMap(null) });
  },

  setCenter: function(center){
    this.center = new google.maps.LatLng(center[0], center[1]);
  },

  renderRoute: function(start, end) {
    var request = {
      origin: start,
      destination: end,
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