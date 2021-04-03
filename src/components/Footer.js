import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>
          <a href="">Company</a>
        </p>
        <p>
          <a href="">Careers</a>
        </p>
        <p>
          <a href="">Contact Us</a>
        </p>
        <p>
          <a href="">Media Center</a>
        </p>
        <p>
          <a href="">Privarcy &amp; Legal</a>
        </p>
        <p>
          <a href="">Sitemap</a>
        </p>
        <p>
          <a href="">NewsLetter</a>
        </p>
      </div>
      <div className="footer__right">
        <FacebookIcon />
        <TwitterIcon />
        <YouTubeIcon />
        <InstagramIcon />
        <LinkedInIcon />
      </div>
    </div>
  );
}

export default Footer;
