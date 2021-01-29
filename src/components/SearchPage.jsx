import React from "react";
import Button from "@material-ui/core/Button";
import "../css/searchPage.css";
import SearchResult from "./searchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays - 26 aug to 30 aug - 1 guests</p>
        <h1>Places to stay near you</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        src="https://a0.muscache.com/im/pictures/58b6cb36-62d8-4a78-a694-d5cf306840e1.jpg?im_w=1200"
        location="Room in boutique hotel hosted by Arlo SoHo"
        title="City Queen"
        descirption="2 guests · 1 bedroom · 1 bed · 1 bath"
        star={4.6}
        price="$63 / night"
        total="$189 total"
      />
      <SearchResult
        src="https://a0.muscache.com/im/pictures/5845eb43-18d3-430d-8350-a4e37916d38a.jpg?im_w=1200"
        location="Private room in Brooklyn"
        title="Bright Bedroom in the heart of Bushwick"
        descirption="1 guest · 1 bedroom · 1 bed · 1 shared bath"
        star={4.89}
        price="$29 / night"
        total="$58 total"
      />
      <SearchResult
        src="https://a0.muscache.com/im/pictures/aec43413-d5ad-4eda-ad7e-7959833d60ed.jpg?im_w=1200"
        location="Entire apartment in New York"
        title="LES Garden Studio"
        descirption="2 guests · Studio · 1 bed · 1 bath"
        price={"$70 / night"}
        total="$140 total"
      />
      <SearchResult
        src="https://a0.muscache.com/im/pictures/3853d9c2-daf1-45f9-84f8-c73f60deea99.jpg?im_w=960"
        location="Hotel room in Manhattan"
        title="King Room Sky"
        descirption="2 guests · 1 bedroom · 1 bed · 1 bath"
        price="$99 / night"
        total="$198 total"
        star={4.67}
      />
    </div>
  );
};

export default SearchPage;
