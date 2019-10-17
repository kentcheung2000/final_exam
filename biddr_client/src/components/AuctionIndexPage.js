import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Spinner from './Spinner';
import { Auction } from '../requests';
import NewAuctionForm from './NewAuctionForm';


class AuctionIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctions: [],
      isLoading: true
    };
    this.createAuction = this.createAuction.bind(this);
  }

  componentDidMount() {
    Auction.all().then((auctions) => {
      this.setState({
        auctions: auctions,
        isLoading: false
      });
    });
  }



  createAuction(params) {
    Auction.create(params).then(auction => {
      Auction.one(auction.id).then(auction => {
        this.setState(state => {
          return {
            auctions: [{
              ...auction,
              ...state.auctions
            }]
          };
        });
        this.props.history.push(`/auctions/${auction.id}`);
      });
    });
  }


  render() {
    if (!this.state.auctions) {
      return <Spinner />;
    }
    const filterAuction = this.state.auctions.filter((a, index) => {

      if (this.props.notShowAll || index < 10) {
        return true;
      }
      return false;
    });

    return (
      <main className="AuctionIndexPage">
        <h1>Auctions</h1>
        {/* <NewAuctionForm onCreateAuction={this.createAuction} /> */}

        <ul>
          {filterAuction.map((auction, index) => (
            <li key={index}>
              <p>

                <Link to={`/auctions/${auction.id}`}>{auction.title}</Link>
                <br />
                <small>Posted on: {new Date(auction.created_at).toLocaleDateString()} </small>

              </p>

              <br />
            </li>
          ))}

        </ul>
      </main>
    );
  }

}

export default AuctionIndexPage;