import { Button } from "@mui/material";
import React from "react";
import { addToWatchList } from "../functions/watchList";
import Rating from "./Rating";

const TvDetails = ({ details }) => {
  return (
    <>
      <h2>{details.original_name}</h2>
      <span>First aired: {details.first_air_date}</span>
      <br />
      <span>Current Status: {details.status}</span>
      <br />
      <span>Number of Seasons: {details.number_of_seasons}</span>
      <br />
      <span>Number of Episodes: {details.number_of_episodes}</span>
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

export default TvDetails;
