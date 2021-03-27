import React from "react";
import "./Header.css";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import SearchSharpIcon from "@material-ui/icons/SearchSharp";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img
          className="logo"
          src="https://www.carlogos.org/car-logos/lamborghini-logo-1000x1100.png"
          alt=""
        />
      </div>
      <div className="header__left">
        <p>
          <a href="">Models</a>
        </p>
        <p>
          <a href="">Ownership</a>
        </p>
        <p>
          <a href="">Motorsport</a>
        </p>
        <p>
          <a href="">Pre-owned</a>
        </p>
      </div>
      <div className="header__right">
        <p>
          <a href="">Dealerships</a>
        </p>
        <p>
          <a href="">Museum</a>
        </p>
        <p>
          <a href="">Store</a>
        </p>
      </div>
      <div className="header__rightIcons">
        <ForumRoundedIcon />
        <SearchSharpIcon />
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
