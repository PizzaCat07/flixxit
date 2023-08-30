import { Button } from "@mui/material";
import React from "react";
import { addToWatchList } from "../functions/watchList";
import Rating from "./Rating";

const MovieDetails = ({ details }) => {
  //console.log("movieDetails:", details);

  return (
    <>
      <h2>{details.title}</h2>
      <span>
        {details.status} {details.release_date}
      </span>
      <p>
        <a href={details.homepage}>Homepage</a>
      </p>
      <p>{details.overview}</p>
      <p>
        Genres:{" "}
        {details.genres.map((x) => {
          return <span>{x.name} </span>;
        })}
      </p>
      Produced by
      <ul>
        {details.production_companies.map((x) => {
          return <li>{x.name}</li>;
        })}
      </ul>
      <div className="interactContainer">
        <div>
          <Button onClick={() => addToWatchList(details, "tv")}>
            Add to watchlist
          </Button>
          <Rating />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
