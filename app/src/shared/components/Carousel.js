import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
import { useNavigate } from "react-router-dom";
import { addToRecentWatched } from "../functions/recentWatched";

const Carousel = ({ title, type, data }) => {
  const navigate = useNavigate();

  //set baseurl for image size
  const imageBaseUrl = "https://image.tmdb.org/t/p/w92";

  const responsive = {
    0: { items: 1 },
    568: { items: 8 },
    1024: { items: 15 },
  };

  let recentWactchedDetails = {
    type: type,
    poster_path: data.poster_path,
    genres: data.genres,
  };

  const navigateHandler = (id, type, x) => {
    navigate(`/title/${type}/${id}`);
    addToRecentWatched(x, type);
  };

  return (
    <>
      <div>
        <h2 className="category">{title}</h2>
        <AliceCarousel
          mouseTracking
          infinite
          responsive={responsive}
          controlsStrategy="alternate"
          items={data.map((x) => {
            return (
              <div
                className="item"
                onClick={() => navigateHandler(x.id, type, x)}
                key={x.id}
              >
                <img
                  src={imageBaseUrl + x.poster_path}
                  className="carouselImg"
                />
              </div>
            );
          })}
        />
      </div>
    </>
  );
};

export default Carousel;
