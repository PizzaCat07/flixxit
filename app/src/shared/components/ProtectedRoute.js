import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    let userToken = localStorage.getItem("userToken");
    if (userToken) {
      let decoded = jwtDecode(userToken);
      let expire = decoded.exp * 1000;
      if (new Date().getTime() < expire) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        localStorage.clear();
        navigate("/login");
      }
    } else {
      setIsAuthenticated(false);
      localStorage.clear();
      navigate("/login");
    }
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      {isAuthenticated ? (
        <>
          <Header />
          {children}
        </>
      ) : (
        <></>
      )}
    </>
  );
}
