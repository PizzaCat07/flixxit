import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import { getMovieDetails, getTvDetails } from "../../shared/api/movieApi";
import MovieDetails from "../../shared/components/MovieDetails";
import TvDetails from "../../shared/components/TvDetails";

const Title = () => {
  const param = useParams();
  const type = param.type;
  const id = param.id;

  const [details, setDetails] = useState({});
  console.log(details);

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
      </div>
    </>
  );
};

export default Title;
