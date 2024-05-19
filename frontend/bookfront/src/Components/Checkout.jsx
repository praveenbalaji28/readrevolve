import React from 'react';
import PropTypes from 'prop-types';

const Checkout = ({ location }) => {
  if (!location) {
    // If location is undefined, render a message indicating the error
    return (
      <div>
        <h1>Checkout</h1>
        <p>Error: Location data is undefined.</p>
      </div>
    );
  }

  const { state } = location;

  if (!state || !state.book) {
    // If state or book is undefined, render a message indicating no book data
    return (
      <div>
        <h1>Checkout</h1>
        <p>No book data found.</p>
      </div>
    );
  }

  const { book } = state;

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <p>Book ID: {book.id}</p>
        <p>Title: {book.title}</p>
        <p>Subtitle: {book.subtitle}</p>
        <p>Description: {book.description}</p>
        {/* Add more details as needed */}
      </div>
      {/* Add a Buy Now button */}
      <button onClick={() => console.log('Buy Now clicked')}>Buy Now</button>
    </div>
  );
};

Checkout.propTypes = {
  location: PropTypes.object,
};

export default Checkout;
