class CreateBids < ActiveRecord::Migration[6.0]
  def change
    create_table :bids do |t|
      t.float :bid_price
      t.date :bid_date

      t.timestamps
    end
  end
end
