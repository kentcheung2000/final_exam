import React from 'react';

function NewBidForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    const newBid = {
      bid_price: formData.get("bid_price"),

    };

    props.onCreateAuction(newBid);
    currentTarget.reset();
  }
  return (
    <form className="ui form" onSubmit={handleSubmit}>


      <div className="field">
        <label htmlFor="bid_price">Your bid price</label>
        <input
          type="number"
          name="bid_price"
          id="bid_price"
          step="0.01"
          placeholder="Please enter your bid price" />
      </div>

      <button className="ui button" type="submit">
        bid
      </button>

    </form>
  )

}

export default NewBidForm;
