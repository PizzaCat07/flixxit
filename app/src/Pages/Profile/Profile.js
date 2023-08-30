import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import Carousel from "../../shared/components/Carousel";
import { getRecentWatched } from "../../shared/functions/recentWatched";

const Profile = () => {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    getRecentWatched(setRecent);
  }, []);

  return (
    <>
      <div id="screenArea">
        <h2>Recently Viewed</h2>
        <Carousel data={recent} />
      </div>
    </>
  );
};

export default Profile;
