import { Button } from "@material-ui/core";
import React from "react";
import "./News.css";

function News() {
  return (
    <div className="news">
      <div className="news__top">
        <div className="news__topHead">
          <h1>News</h1>
          <h2>Lamborghini World</h2>
        </div>

        <div className="news__topImage">
          <img
            src="https://autotalkblog.com/wp-content/uploads/2020/05/Lamborghini-Hurac%C3%A1n-EVO-RWD-2.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="news__middle">
        <div className="news__middleHead">
          <h3>31 MARCH 2021</h3>
          <h4>Huracán</h4>
        </div>
      </div>

      <div className="news__middleDesc">
        <div className="news__middleTop">
          <h3>Huracán EVO and Amazon Alexa: Towards the Future of Mobility</h3>
          <p>
            The future of mobility demands advanced technologies, and this is
            why Lamborghini has boosted its offer of connectivity services in
            the Huracán EVO models, becoming the first automotive brand to
            incorporate Amazon Alexa’s complete control and making the driving
            experience even more captivating.{" "}
          </p>
        </div>
        <div className="news__middleButton">
          <div>Read More</div>
        </div>
      </div>

      <div className="news__bottomDiv1">
        <div className="news__bottomDivImage">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/596/704/16/lamborghini-lamborghini-urus-hd-wallpaper-thumb.jpg"
            alt=""
          />
        </div>
        <div className="news__bottomHead">
          <h3>25 MARCH 2021</h3>
          <h4>Urus</h4>
          <h2>Lamborghini Urus in 6 driving Modes: Pure freedom</h2>
          <div>Read More</div>
        </div>
      </div>
      <div className="news__bottomDiv2">
        <div className="news__bottomDiv2Image">
          <img
            src="https://i0.wp.com/storage.googleapis.com/stateless-watchilove-com/2021/03/b736e687-lamborghini_uruscover-e1616913284832.jpg?fit=678%2C381&ssl=1"
            alt=""
          />
        </div>
        <div className="news__bottomHeading">
          <h3>20 MARCH 2021</h3>
          <h4>Urus</h4>
          <h2>Days of Speed: Urus sets records on ice</h2>
          <div>Read More</div>
        </div>
      </div>
      <div className="news__bottomButton">See all</div>
    </div>
  );
}

export default News;
