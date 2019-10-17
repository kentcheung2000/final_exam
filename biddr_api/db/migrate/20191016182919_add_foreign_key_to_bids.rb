class AddForeignKeyToBids < ActiveRecord::Migration[6.0]
  def change
    add_reference :bids, :auctions

  end
end
