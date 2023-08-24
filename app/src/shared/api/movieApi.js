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

const getPopularTV = async (setState) => {
  await fetch("https://api.themoviedb.org/3/discover/tv", {
    headers: {
      Authorization: process.env.REACT_APP_API_TOKEN,
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      const data = json.results;
      setState(data);
    });
};

const getTopMovie = async (setState) => {
  await fetch("https://api.themoviedb.org/3/movie/top_rated", {
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

const getTopTV = async (setState) => {
  await fetch("https://api.themoviedb.org/3/tv/top_rated", {
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

export { getPopularMovie, getPopularTV, getTopMovie, getTopTV };
