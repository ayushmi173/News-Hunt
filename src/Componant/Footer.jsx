import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="footer-distributed">
        <div className="footer-left">
          <h3>
            News<span> Hunt</span>
          </h3>
          <p className="footer-left">
            Welcome to News Hunt web potal. All news are better match with the correct
            ones with plethora of catagories.
          </p>

          <p className="footer-company-name">News Hunt &copy; 2020</p>
        </div>

        <div className="footer-center">
          <p className="footer-company-about">
            <span>Address</span>
          </p>
          <div>
            <p>
              <span>Sector 62, Green Garden</span> Noida, Uttar - Pradesh, India
            </p>
          </div>

          <div>
            <p>0512- 111- 222</p>
          </div>

          <div>
            <p>
              <a href="mailto:support@newshunt.com">info@newshunt.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            News Hunt is providing worldwide current and genuine information
            &amp; Serving world almost 20 years
          </p>

          <div className="footer-icons">
            <a href="https://www.youtube.com" className="youtube social">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com" className="facebook social">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com" className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
