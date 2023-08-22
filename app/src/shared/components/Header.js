import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div id="header">
      <span className="siteName">FLIXXIT </span>
      <div id="navBar">
        <span
          onClick={() => {
            navigate("/search");
          }}
        >
          Search{" "}
        </span>
        <span
          onClick={() => {
            navigate("/watchlist");
          }}
        >
          Watch List{" "}
        </span>
        <span
          onClick={() => {
            navigate("/subscription");
          }}
        >
          Subscription{" "}
        </span>
        <span
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile{" "}
        </span>
        <div id="exitBlock">
          <span
            onClick={() => {
              navigate("/login");
            }}
          >
            Log Out{" "}
          </span>
          <span
            onClick={() => {
              navigate("/about");
            }}
          >
            About Us
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;