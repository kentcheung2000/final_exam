class RenameBids < ActiveRecord::Migration[6.0]
  def change
    rename_column :bids, :auctions_id, :auction_id
  end
end
