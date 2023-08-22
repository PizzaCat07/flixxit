import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import {
  getPopularMovie,
  getPopularTV,
  getTopMovie,
  getTopTV,
} from "../../shared/api/movieApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
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
      <div className="caroselDivide">
        <Header />
        <div>
          <h2 className="category">Popular Movies</h2>
          <AliceCarousel
            infinite
            responsive={responsive}
            controlsStrategy="alternate"
            items={popularMovie.map((x) => {
              return (
                <div className="item" onClick={() => console.log(x.id)}>
                  <img src={imageBaseUrl + x.poster_path} />
                </div>
              );
            })}
          />
        </div>
        <div>
          <h2 className="category">Popular TV Shows</h2>
          <AliceCarousel
            infinite
            responsive={responsive}
            controlsStrategy="alternate"
            items={popularTV.map((x) => {
              return (
                <div className="item">
                  <img src={imageBaseUrl + x.poster_path} />
                </div>
              );
            })}
          />
        </div>
        <div>
          <h2 className="category">Top Rated Movies</h2>
          <AliceCarousel
            infinite
            responsive={responsive}
            controlsStrategy="alternate"
            items={topMovie.map((x) => {
              return (
                <div className="item" onClick={() => console.log(x.id)}>
                  <img src={imageBaseUrl + x.poster_path} />
                </div>
              );
            })}
          />
        </div>
        <div>
          <h2 className="category">Top Rated TV Shows</h2>
          <AliceCarousel
            infinite
            responsive={responsive}
            controlsStrategy="alternate"
            items={topTV.map((x) => {
              return (
                <div className="item" onClick={() => console.log(x.id)}>
                  <img src={imageBaseUrl + x.poster_path} />
                </div>
              );
            })}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
