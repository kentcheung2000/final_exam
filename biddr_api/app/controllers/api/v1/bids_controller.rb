class Api::V1::BidsController < Api::ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def create
    auction = Auction.find_by(id: params[:auction_id])
    bid = Bid.new bid_params
    bid.user = current_user
    bid.auction = auction
    if bid.save
      render json: {id: bid.id }
    else
      render(
        json: {errors: bid.errors},
        status: 422
      )
    end
  end


  private

  def bid_params
    params.require(:bid).permit(:bid_price)
  end

end
