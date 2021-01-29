import React from "react";
import logo from "../css/airbnb-logo.png";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={logo} alt="airbnb logo" />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon></SearchIcon>
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
