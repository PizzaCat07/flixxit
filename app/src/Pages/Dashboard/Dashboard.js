import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import { getPopularMovie, getDiscoverMovie } from "../../shared/api/movieApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const Dashboard = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  const [discoverMovie, setDiscoverMovie] = useState([]);

  const imageBaseUrl = "https://image.tmdb.org/t/p/w92";

  const responsive = {
    0: { items: 1 },
    568: { items: 8 },
    1024: { items: 12 },
  };

  useEffect(() => {
    getPopularMovie(setPopularMovie);
    getDiscoverMovie(setDiscoverMovie);
  }, []);

  console.log("popular Movie:", popularMovie);
  console.log("discover Movie: ", discoverMovie);

  return (
    <>
      <div>
        <Header />
        <AliceCarousel
          infinite
          responsive={responsive}
          controlsStrategy="alternate"
          items={popularMovie.map((x) => {
            return (
              <div className="item">
                <img src={imageBaseUrl + x.poster_path} />
              </div>
            );
          })}
        />
        <div>
          <AliceCarousel
            infinite
            responsive={responsive}
            controlsStrategy="alternate"
            items={discoverMovie.map((x) => {
              return (
                <div className="item">
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
