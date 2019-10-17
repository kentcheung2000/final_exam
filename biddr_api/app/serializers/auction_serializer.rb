class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :current_price,
    :end_at,
    :reserve_price,
    :reserve_price_met,
    :created_at
  )

  belongs_to(:user, key: :seller)
  has_many(:bids)

  class ReviewSerializer  < ActiveModel::Serializer
    attributes :id, :bid_price, :bid_date, :created_at, :updated_at

    belongs_to :user, key: :seller
  end
end
