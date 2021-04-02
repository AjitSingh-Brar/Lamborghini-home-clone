import React from "react";
import "./Configurator.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Configurator() {
  return (
    <div className="configurator">
      <div className="configurator__top">
        <h2>CONFIGURATOR</h2>
        <h1>CREATE YOUR AVENTADOR</h1>
      </div>
      <div className="configurator__bottom">
        <div className="configurator__hexagon">
          <ArrowForwardIosIcon />
        </div>
        <div className="configurator__paragraph">
          <div>
            <p>Aventador</p>
          </div>
          <div>
            <p>Hurrcan</p>
          </div>
          <div>
            <p>Urus</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Configurator;
