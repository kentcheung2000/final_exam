class RemoveForeignKeyBid < ActiveRecord::Migration[6.0]
  def change
    remove_reference :auctions, :bid, index: true, foreign_key: true

  end
end
