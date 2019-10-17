import React from 'react';
import BidDetails from './BidDetails';

function BidList(props) {

  return (

    <ul>

      {
        props.bids.map((bid) => (
          <li key={bid.id}>
            <BidDetails
              bid_price={bid.bid_price}
              bid_date={bid.bid_date}

            />
          </li>

        ))
      }
    </ul>
  );
}

export default BidList;