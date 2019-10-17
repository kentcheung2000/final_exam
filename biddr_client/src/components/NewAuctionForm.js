import React from 'react';

function NewAuctionForm(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);

    const newAuction = {
      title: formData.get("title"),
      description: formData.get("description"),
      end_at: formData.get("end_at"),
      reserve_price: formData.get("reserve_price")
    };

    props.onCreateAuction(newAuction);
    currentTarget.reset();
  }
  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Please enter title" />
      </div>

      <div className="field">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Please enter description" />
      </div>

      <div className="field">
        <label htmlFor="end_at">End at</label>
        <input
          type="date"
          name="end_at"
          id="end_at"
          placeholder="Please enter end date" />
      </div>

      <div className="field">
        <label htmlFor="reserve_price">Reserve Price</label>
        <input
          type="number"
          name="reserve_price"
          id="reserve_price"
          step="0.01"
          placeholder="Please enter reserve price" />
      </div>

      <button className="ui button" type="submit">
        Submit
      </button>

    </form>
  )

}

export default NewAuctionForm;
