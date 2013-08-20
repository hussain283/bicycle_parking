var data = {
  center: [37.795701, -122],

  parkingSpots: [{
    name: "Point A",
    latitude: 37.7957,
    longitude: -122.01
  },
  {
    name: "Point B",
    latitude: 37.8957,
    longitude: -121.01
  }]
};


describe("Bicycle Parking", function(){

  it("should be true",function(){
    expect(BicycleParking).toBeTruthy();
  });

  it("should initialize collection and router and start Backbone history", function(){
    var fakeParkingSpotsCollection = { name: 'fake1' }
    var fakeParkingSpotsRouter = { name: 'fake2' }
    var fakeBackboneHistory = { name: 'fake3' }

    var spy1 = spyOn(BicycleParking.Collections, 'ParkingSpots').andReturn(fakeParkingSpotsCollection);
    var spy2 = spyOn(BicycleParking.Routers, 'ParkingSpots').andReturn(fakeParkingSpotsRouter);
    var spy3 = spyOn(Backbone.history, 'start').andReturn(fakeBackboneHistory);

    var BikeParking = BicycleParking.initialize(data);
    expect(BikeParking).toEqual(BicycleParking);
    expect(BikeParking.parkingSpots).toBe(fakeParkingSpotsCollection);

    expect(spy1).toHaveBeenCalledWith(data.parkingSpots,{center: data.center});
    expect(spy2).toHaveBeenCalled();
    expect(spy3).toHaveBeenCalledWith({pushState: true});
  });
});

describe("BicycleParking.Collections.ParkingSpots", function(){

  it("should instantiate BicycleParking.Collections.ParkingSpots", function(){
    var collection = new BicycleParking.Collections.ParkingSpots(data.parkingSpots,{ center: data.center });
    expect(collection instanceof BicycleParking.Collections.ParkingSpots).toBeTruthy();
    expect(collection.center).toEqual(data.center);
  });

});

describe("BicycleParking.Routers.ParkingSpots",function(){

  it("should call index function on hoe navigation",function(){

    var router = new BicycleParking.Routers.ParkingSpots();

    var fakeView = jasmine.createSpyObj('BicycleParking.Views.ParkingSpotsMapView', [ 'render', '$el' ]);

    fakeView.render.andCallFake(function() { return this });
    fakeView.$el.andCallFake(function() { return '<p></p>' });

    var spy1 = spyOn(BicycleParking.Views, 'ParkingSpotsMapView').andReturn(fakeView);
    var spy2 = spyOn(BicycleParking.Views, 'ParkingSpotsSearchFormView').andReturn(fakeView);

    Backbone.history.start({pushState: true});

    expect($('.bicycle_parking').find('p')).toBeTruthy();
  });
});
