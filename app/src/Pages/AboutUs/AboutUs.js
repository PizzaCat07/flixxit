import React from "react";
import Header from "../../shared/components/Header";

const AboutUs = () => {
  return (
    <>
      <div id="screenArea">
        <h3>About us</h3>
        <p>
          Movie data provided by themoviedb.org Api. Please visit the at{" "}
          <a href="https://www.themoviedb.org/">https://www.themoviedb.org/</a>{" "}
        </p>
        <p>For questions and support please email us at Flixxit@support.com</p>
        <p>Copywrite 2023</p>
      </div>
    </>
  );
};

export default AboutUs;
