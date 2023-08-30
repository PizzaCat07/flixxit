import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { getMovieDetails, getTvDetails } from "../../shared/api/movieApi";
import MovieDetails from "../../shared/components/MovieDetails";
import TvDetails from "../../shared/components/TvDetails";
import VideoJS from "../../shared/components/VideoJS";
import videojs from "video.js";
import Video1 from "../../videos/video1.mov";
import Video2 from "../../videos/video2.mov";
import Video3 from "../../videos/video3.mov";
import Video4 from "../../videos/video4.mov";

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
  let randomVideo = Video1;

  switch (rndInt) {
    case 1:
      randomVideo = Video1;
      break;
    case 2:
      randomVideo = Video2;
      break;
    case 3:
      randomVideo = Video3;
      break;
    case 4:
      randomVideo = Video4;
      break;
    default:
      randomVideo = Video1;
      break;
  }

  const imgUrl = `https://image.tmdb.org/t/p/w342/${details.poster_path}`;

  useEffect(() => {
    if (type == "movie") {
      console.log("movie", id);
      getMovieDetails(id, setDetails);
    }
    if (type == "tv") {
      console.log("tv", id);
      getTvDetails(id, setDetails);
    }
  }, [id]);

  const playerRef = React.useRef(null);

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
        <Grid container spacing={10}>
          <Grid item xs={4}>
            <img src={imgUrl} className="posterImg" />
          </Grid>
          <Grid item xs={8}>
            {Object.keys(details).length > 0 && type == "movie" ? (
              <MovieDetails details={details} />
            ) : null}
            {Object.keys(details).length > 0 && type == "tv" ? (
              <TvDetails details={details} />
            ) : null}
          </Grid>
        </Grid>
        <div id="vid">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      </div>
    </>
  );
};

export default Title;
