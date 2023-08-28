import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email");
  return (
    <div id="header">
      <span className="siteName">FLIXXIT </span>
      <div id="navBar">
        <span
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Browse{" "}
        </span>
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
              localStorage.clear();
              navigate("/login");
            }}
          >
            Log Out({email})
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
