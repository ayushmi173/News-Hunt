import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "./SubHeader";
import CookieConsent from "react-cookie-consent";

const Header = () => {
  return (
    <>
      <Link to="/News-Hunt" style={{ textDecoration: "none" }}>
        <div className="footer-distributed news-header">
          <h3 className="heading">
            News<span> Hunt</span>
          </h3>
        </div>
      </Link>
      <SubHeader />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="myAwesomeCookieName2"
        style={{ background: "black" }}
        buttonStyle={{
          color: "black",
          backgroundColor: "white",
          fontWeight: 500,
          fontSize: "20px",
          marginRight: "80px",
        }}
        expires={150}
      >
        By using our site, you acknowledge that you have read and understand our
        Cookie Policy, Privacy Policy, and our Terms of Service.
      </CookieConsent>
    </>
  );
};
export default Header;
