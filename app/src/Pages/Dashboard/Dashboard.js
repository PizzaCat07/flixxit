import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import {
  getPopularMovie,
  getPopularTV,
  getTopMovie,
  getTopTV,
} from "../../shared/api/movieApi";
import Carousel from "../../shared/components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const Dashboard = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [popularTV, setPopularTV] = useState([]);
  const [topMovie, setTopMovie] = useState([]);
  const [topTV, setTopTV] = useState([]);

  //set baseurl for image size
  const imageBaseUrl = "https://image.tmdb.org/t/p/w92";

  const responsive = {
    0: { items: 1 },
    568: { items: 8 },
    1024: { items: 15 },
  };

  useEffect(() => {
    getPopularMovie(setPopularMovie);
    getPopularTV(setPopularTV);
    getTopMovie(setTopMovie);
    getTopTV(setTopTV);
  }, []);

  return (
    <>
      <div id="screenArea">
        <div>
          <Carousel title={"Popular Movies"} data={popularMovie} />
        </div>
        <div>
          <Carousel title={"Popular TV Shows"} data={popularTV} />
        </div>
        <div>
          <Carousel title={"Top Rated Movies"} data={topMovie} />
        </div>
        <div>
          <Carousel title={"Top Rated TV Shows"} data={topTV} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
