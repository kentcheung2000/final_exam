import React, { Component } from "react";

import AuctionDetails from "./AuctionDetails";
import BidList from "./BidList";
import Spinner from "./Spinner";
import { Auction } from "../requests";

class AuctionShowPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auction: null,
      isLoading: true
    }
  }

  componentDidMount() {
    Auction.one(this.props.match.params.id).then(auction => {
      this.setState({
        auction: auction,
        isLoading: false
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />
    }

    if (!this.state.auction) {
      return (<div>Auction item doesn't exist</div>)
    }

    return (
      <div>
        <h1>Auction Item</h1>
        <AuctionDetails
          title={this.state.auction.title}
          description={this.state.auction.description}
          end_at={this.state.auction.end_at}
          reserve_price={this.state.auction.reserve_price}
          reserve_price_met={this.state.auction.reserve_price_met}
        />



        <h3>Previous Bids</h3>

        <BidList
          bids={this.state.auction.bids}
        />

      </div>

    )

  }

}

export default AuctionShowPage;