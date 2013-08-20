require 'spec_helper'

describe HomeController do

  describe "Home#index" do

    it "should return http success" do
      get 'index'
      response.should be_success
    end
    
  end

end
