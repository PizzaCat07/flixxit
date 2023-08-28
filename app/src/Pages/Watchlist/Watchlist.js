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
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  const imageBaseUrl = "https://image.tmdb.org/t/p/w342";

  useEffect(() => {
    setReload(false);
    getWatchList(setWatchlist);
  }, [reload]);

  return (
    <>
      <div id="screenArea">
        {watchlist ? (
          <>
            <h2 className="category">Watch List</h2>
            <div className="watchlistContainer">
              {watchlist.map((x) => {
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
                        removeWatchList(x._id, setReload);
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
