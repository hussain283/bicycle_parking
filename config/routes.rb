BicycleParking::Application.routes.draw do
  root :to => "home#index"

  get '/search', to: 'ParkingSpots#search'

  mount JasmineRails::Engine => "/specs" if defined?(JasmineRails)
end
