import React from "react";
import "./Model.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import AddIcon from "@material-ui/icons/Add";

function Model() {
  return (
    <div className="model">
      <div className="model__parallelogramDiv"></div>
      <div className="model__parallelogramSide"></div>
      <div className="model__top">
        <h2>Models</h2>
        <div className="model__hexagonBackward">
          <ArrowBackIosIcon />
        </div>
        <div className="model__hexagonForeward">
          <ArrowForwardIosIcon />
        </div>
      </div>
      <div className="model__middle">
        <h1>HURACÁN</h1>
        <h2>BASED ON A TRUE STORY</h2>
      </div>

      <div className="model__bottom">
        <div className="model__bottomHexagon">
          <AddIcon />
        </div>
        <h3>Explore the models</h3>
      </div>
    </div>
  );
}

export default Model;
