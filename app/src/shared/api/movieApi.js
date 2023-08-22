import React from "react";

const getPopularMovie = async (setState) => {
  await fetch("https://api.themoviedb.org/3/movie/popular", {
    headers: {
      Authorization: process.env.REACT_APP_API_TOKEN,
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      //console.log(json.results);
      const data = json.results;
      setState(data);
    });
};

const getDiscoverMovie = async (setState) => {
  await fetch("https://api.themoviedb.org/3/discover/movie", {
    headers: {
      Authorization: process.env.REACT_APP_API_TOKEN,
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      //console.log(json.results);
      const data = json.results;
      setState(data);
    });
};

export { getPopularMovie, getDiscoverMovie };
