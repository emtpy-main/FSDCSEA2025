import React from "react";

const BookCard = ({ data }) => {
  const { image, title, publisher, price } = data;

  return (
    <div className="bookCard">
      <img src={image} alt={title} width={150} height={200} />
      <h4>Title: {title}</h4>
      <h4>Publisher: {publisher}</h4>
      <h4>Price: {price}</h4>
    </div>
  );
};

export default BookCard;
