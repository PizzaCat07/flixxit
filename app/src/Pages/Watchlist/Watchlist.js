import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import {
  getWatchList,
  removeWatchList,
} from "../../shared/functions/watchList";
import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState();
  const navigate = useNavigate();

  const imageBaseUrl = "https://image.tmdb.org/t/p/w342";

  useEffect(() => {
    getWatchList(setWatchlist);
  }, []);

  return (
    <>
      <div id="screenArea">
        {watchlist ? (
          <>
            <h2 className="category">Watch List</h2>
            <div className="watchlistContainer">
              {watchlist.x.map((x) => {
                return (
                  <div className="watchlistObj">
                    <img
                      src={imageBaseUrl + x.details.details.poster_path}
                      onClick={() =>
                        navigate(
                          `/title/${x.details.type}/${x.details.details.id}`
                        )
                      }
                    />
                    <Button
                      onClick={() => {
                        removeWatchList(x._id, setWatchlist);
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                );
              })}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Watchlist;
