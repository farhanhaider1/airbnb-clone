import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "../css/banner.css";
import Search from "./search";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search></Search>}
        <Button
          className="banner_searchBtn"
          variant="outlined"
          onClick={() => setShowSearch(!showSearch)}
        >
          {!showSearch ? "Search Dates" : "Hide"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
};

export default Banner;
