class AddBidReferencesToAuction < ActiveRecord::Migration[6.0]
  def change
    add_reference :auctions, :bid, null: false, foreign_key: true
  end
end
