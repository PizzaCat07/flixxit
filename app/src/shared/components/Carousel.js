import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";

const Carousel = ({ title, data }) => {
  //set baseurl for image size
  const imageBaseUrl = "https://image.tmdb.org/t/p/w92";

  const responsive = {
    0: { items: 1 },
    568: { items: 8 },
    1024: { items: 15 },
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
              <div className="item" onClick={() => console.log(x.id)}>
                <img src={imageBaseUrl + x.poster_path} />
              </div>
            );
          })}
        />
      </div>
    </>
  );
};

export default Carousel;
