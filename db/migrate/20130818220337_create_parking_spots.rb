class CreateParkingSpots < ActiveRecord::Migration
  def change
    create_table :parking_spots do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :state
      t.float :latitude
      t.float :longitude

      t.timestamps

    end

    add_index :parking_spots, [:latitude, :longitude]
  end
end
