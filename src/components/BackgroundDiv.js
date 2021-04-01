import React from "react";
import "./BackgroundDiv.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function BackgroundDiv() {
  return (
    <div className="backgroundDiv">
      <div className="backgroundDiv__image">
        <h2>Unlock Graphite Capsule</h2>
        <h1>Unlock any road</h1>
        <div className="backgroundDiv__hexagon">
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
}

export default BackgroundDiv;
