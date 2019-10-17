import React from 'react';

function AuctionDetails(props) {
  return (
    <div style={{ backgroundColor: 'gray', color: 'maroon' }}>
      <h2>{props.title}</h2>
      <p>
        {props.description}<br />
        Ends at: {props.end_at}<br />
        Reserve_price:  {props.reserve_price}<br />
        Reserve price met: {props.reserve_price_met}<br />
      </p>

    </div>

  );
}

export default AuctionDetails;
