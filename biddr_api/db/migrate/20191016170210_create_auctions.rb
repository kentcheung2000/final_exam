class CreateAuctions < ActiveRecord::Migration[6.0]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.float :current_price
      t.date :end_at
      t.float :reserve_price
      t.boolean :reserve_price_met

      t.timestamps
    end
  end
end
