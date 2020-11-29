import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "./SubHeader";
import Ticker from "react-ticker";
import CookieConsent from "react-cookie-consent";

const Header = () => {
  return (
    <>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="footer-distributed news-header">
          <h3 className="heading">
            News<span> Hunt</span>
          </h3>
        </div>
      </Link>
      <SubHeader />
      <Ticker>
        {({ index }) => (
          <>
            <h5 style={{ padding: "5px 30px 0px 0px", color: "red" }}>
              Breaking News : मन की बात में बोले पीएम मोदी- कृषि कानूनों से
              किसानों के लिए नए रास्ते खुले | कोरोना: भारत में 24 घंटे में 41
              हजार नए मामले |
            </h5>
          </>
        )}
      </Ticker>
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
