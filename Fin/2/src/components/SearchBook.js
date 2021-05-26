import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Book.css";

function SearchBook({
  url,
  thumbnail,
  title,
  authors,
  publisher,
  datetime,
  sale_price,
  price,
  status,
}) {
  return (
    <div className="book">
      <a href={url} target="_blank">
        <img src={thumbnail} alt={title} title={title}></img>

        <div className="book__data">
          <h3 className="book__title">{title}</h3>
          <p className="book__autors">{authors}</p>
          <p className="book__publisher">{publisher}</p>
          <p className="book__datetime">{datetime}</p>
          {{ status } === "정상판매" && { sale_price } >= 0 ? (
            <p className="book__sale_price">
              {sale_price} <span>원</span>
            </p>
          ) : (
            <p className="book__price">
              {price} <span>원</span>
            </p>
          )}
        </div>
      </a>
    </div>
  );
}

SearchBook.propTypes = {
  url: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.objectOf(PropTypes.string).isRequired,
  publisher: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  sale_price: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};

export default SearchBook;
