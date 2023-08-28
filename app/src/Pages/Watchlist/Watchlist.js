import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import { getWatchList } from "../../shared/functions/watchList";
import { Grid } from "@mui/material";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState();

  const imageBaseUrl = "https://image.tmdb.org/t/p/w92";

  useEffect(() => {
    getWatchList(setWatchlist);
  }, []);

  return (
    <>
      {watchlist ? (
        <div id="screenArea" className="watchlistContainer">
          <h2 className="category">Watch List</h2>
          <Grid container spacing={10}>
            {watchlist.x.map((x) => {
              return (
                <Grid item xs={1}>
                  <img src={imageBaseUrl + x.details.details.poster_path} />
                </Grid>
              );
            })}
          </Grid>
        </div>
      ) : null}
    </>
  );
};

export default Watchlist;
