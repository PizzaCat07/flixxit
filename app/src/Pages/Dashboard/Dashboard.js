import React, { useEffect, useState } from "react";
import Header from "../../shared/components/Header";
import { getPopularMovie } from "../../shared/api/movieApi";

const Dashboard = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularMovie(setPopular);
  }, []);

  console.log(popular);

  return (
    <>
      <Header />
      <div>
        {popular.map((x) => {
          return <div>{x.original_title}</div>;
        })}
      </div>
    </>
  );
};

export default Dashboard;
