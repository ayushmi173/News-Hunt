import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const fb = <FontAwesomeIcon icon={faLink} />;
    const mobile = <FontAwesomeIcon icon={faMobile} />;
  return (
    <>
      <div class="footer-distributed">
        <div class="footer-left">
          <h3>
            News<span> Hunt</span>
          </h3>

          <p class="footer-links">
            <a href="/">Home  </a>  <a href="/">Blog</a>  <a href="/">Pricing</a>
            <a href="/">About</a>  <a href="/">Faq</a>  <a href="/">Contact</a>
          </p>

          <p class="footer-company-name">News Hunt &copy; 2020</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>Sector 62, Green Garden</span> Noida, Uttar - Pradesh, India
            </p>
          </div>

          <div>
          <i class="fa fa-map-marker"></i>
            <p>0512- 111- 222</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">info@newshunt.com</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
           News Hunt is providing worldwide current and genuine information &amp; Serving world almost 20 years
          </p>

          <div class="footer-icons">
            <a href="https://www.facebook.com/">
            {fb}
            </a>
            <a href="https://twitter.com/?lang=en">
            {fb}
            </a>
            <a href="https://in.linkedin.com/">
            {fb}
            </a>
            <a href="https://github.com/">
            {fb}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
