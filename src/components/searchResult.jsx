import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import "../css/searchResult.css";

const SearchResult = ({
  src,
  location,
  title,
  descirption,
  star,
  price,
  total,
}) => {
  return (
    <div className="searchResult">
      <img src={src} alt="airbnb image" />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>___</p>
          <p>{descirption}</p>
        </div>
        <div className="searchResult__infoBottom">
          {star && (
            <div className="searchResult__stars">
              <div className="searchResult__star">
                <StarIcon />
              </div>
              <p>
                <strong>{star}</strong>
              </p>
            </div>
          )}
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
