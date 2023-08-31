import React, { useEffect, useRef, useState } from "react";
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
  const update = useRef(false);

  useEffect(() => {
    getRecentWatched(setRecent);
    getUser(setUser);
    update.current = true;
  }, []);

  let randomTv = recent.filter((el) => el.type == "tv");
  let randomMovie = recent.filter((el) => el.type == "movie");

  if (randomTv.length > 0 || randomMovie > 0) {
    getSimilarTv(randomTv[randomTv.length - 1].id, setSimilarTv);
    getSimilarMovie(randomMovie[randomMovie.length - 1].id, setSimilarMovie);
  }

  if (recent.length > 10) {
    let newRecent = recent.slice(recent.length - 10, recent.length);
    setRecent(newRecent);
  }

  return (
    <>
      <div id="screenArea">
        {user.length > 0 ? (
          <>
            <h1>Hello {user[0].username}</h1>
            <spam>Current Email: {user[0].email}</spam>
            <h2 className="category">Recently Viewed</h2>
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
