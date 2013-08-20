BicycleParking.Views.ParkingSpotsSearchFormView = Backbone.View.extend({
  template: JST['parking_spots/form'],
  className: 'form',
  events: {
    'ajax:success form':'triggerRefresh'
  },

  render: function(){
    this.$el.html(this.template());
    return this;
  },

  triggerRefresh: function(event, data){
    if (data.parkingSpots.length === 0){
      alert('Nothing Found Near This Location');
    } else {
      BicycleParking.parkingSpots.trigger('refresh', data );
    }
    this.$('form')[0].reset();
    return this;
  }
});
