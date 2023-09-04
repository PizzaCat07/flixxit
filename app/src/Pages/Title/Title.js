import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { getMovieDetails, getTvDetails } from "../../shared/api/movieApi";
import MovieDetails from "../../shared/components/MovieDetails";
import TvDetails from "../../shared/components/TvDetails";
import VideoJS from "../../shared/components/VideoJS";
import videojs from "video.js";

const Title = () => {
  const param = useParams();
  const type = param.type;
  const id = param.id;
  const [details, setDetails] = useState({});

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 4);
  let randomVideo = "/videos/video1.mov";

  switch (rndInt) {
    case 1:
      randomVideo = "/videos/video1.mov";
      break;
    case 2:
      randomVideo = "/videos/video2.mov";
      break;
    case 3:
      randomVideo = "/videos/video3.mov";
      break;
    case 4:
      randomVideo = "/videos/video4.mov";
      break;
    default:
      randomVideo = "/videos/video1.mov";
      break;
  }

  const imgUrl = `https://image.tmdb.org/t/p/w342/${details.poster_path}`;

  useEffect(() => {
    if (type == "movie") {
      getMovieDetails(id, setDetails);
    }
    if (type == "tv") {
      getTvDetails(id, setDetails);
    }
  }, [id]);

  const playerRef = React.useRef(null);
  console.log(randomVideo);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: randomVideo,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <>
      <div id="screenArea" className="detailContainer">
        <div className="infoContainer">
          <div className="poster">
            <img src={imgUrl} />
          </div>
          <div className="info">
            {Object.keys(details).length > 0 && type == "movie" ? (
              <MovieDetails details={details} />
            ) : null}
            {Object.keys(details).length > 0 && type == "tv" ? (
              <TvDetails details={details} />
            ) : null}
          </div>
        </div>

        <Grid container spacing={10}>
          <Grid item xs={4}></Grid>
          <Grid item xs={8}></Grid>
        </Grid>
        <div id="vid">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
    </>
  );
};

export default Title;
