import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import Carousel from "../../shared/components/Carousel";
import {
  getRecentWatched,
  getUser,
} from "../../shared/functions/recentWatched";
import { getSimilarMovie, getSimilarTv } from "../../shared/api/movieApi";

const Profile = () => {
  const [recent, setRecent] = useState([]);
  const [user, setUser] = useState([]);
  const [similarMovie, setSimilarMovie] = useState([]);
  const [similarTv, setSimilarTv] = useState([]);

  useEffect(() => {
    getRecentWatched(setRecent);
  }, []);

  useEffect(() => {
    getUser(setUser);
  }, []);

  useEffect(() => {
    if (randomTvId && randomMovieId) {
      getSimilarTv(randomTvId.id, setSimilarTv);
      getSimilarMovie(randomMovieId.id, setSimilarMovie);
    }
  }, [recent]);

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let randomTv = recent.filter((el) => el.type == "tv");
  let randomMovie = recent.filter((el) => el.type == "movie");

  const rndTv = randomIntFromInterval(0, randomTv.length);
  const rndMovie = randomIntFromInterval(0, randomMovie.length);

  const randomTvId = randomTv[rndTv];
  const randomMovieId = randomMovie[rndMovie];

  console.log("tv", similarTv.length, "movie", similarMovie.length);
  return (
    <>
      <div id="screenArea">
        {user.length > 0 ? (
          <>
            <h1>Hello {user[0].username}</h1>
            <spam>Current Email: {user[0].email}</spam>
            <h2>Recently Viewed</h2>
            <Carousel data={recent} />
          </>
        ) : null}
        {similarMovie.length > 0 ? (
          <>
            <Carousel
              data={similarMovie}
              title={"Movies you may be intrested in"}
            />
          </>
        ) : null}
        {similarTv.length > 0 ? (
          <>
            <Carousel
              data={similarTv}
              title={"TV Shows you may be intrested in"}
            />
          </>
        ) : null}
      </div>
    </>
  );
};

export default Profile;
