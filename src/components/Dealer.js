import React from "react";
import "./Dealer.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Dealer() {
  return (
    <div className="dealer">
      <div className="dealer__top">
        <h2>Dealer Locater</h2>
        <h1>Find your country dealer</h1>
      </div>
      <div className="dealer__bottom">
        <div className="dealer__hexagon">
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default Dealer;
