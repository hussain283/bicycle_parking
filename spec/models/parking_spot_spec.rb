require 'spec_helper'

describe ParkingSpot do

  context "Validations" do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:address) }
    it { should validate_presence_of(:city) }
    it { should validate_presence_of(:state) }
    it { should validate_presence_of(:latitude) }
    it { should validate_presence_of(:longitude) }
  end

  context "search" do

    let(:query) { "717 California St, San Francisco, CA, 94108" }

    it "should return a hash" do
      expect(ParkingSpot.search(query).is_a? Hash).to be_true 
    end

    it "first argument of array should return 2 float values" do
      data = ParkingSpot.search(query)
      expect(data[:center].length).to eq(2)
      expect(data[:center][0].is_a? Float).to be_true
      expect(data[:center][1].is_a? Float).to be_true
    end
  end

end
