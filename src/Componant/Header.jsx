import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="News-Api" style={{ textDecoration: "none" }}>
        <div className="footer-distributed news-header">
          <h3 className="heading">
            News<span> Hunt</span>
          </h3>
        </div>
      </Link>
    </>
  );
};
export default Header;
