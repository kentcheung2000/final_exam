import React from 'react';

function BidDetails(props) {
  return (
    <div>
      <p>
        ${props.bid_price} on {props.bid_date}
      </p>
      <br />

    </div>
  );
}

export default BidDetails;