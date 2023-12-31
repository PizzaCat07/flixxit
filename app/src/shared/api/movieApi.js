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
      const data = json.results;
      setState(data);
    });
};

const searchMovie = async (query, setState) => {
  await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}`, {
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

const searchTv = async (query, setState) => {
  await fetch(`https://api.themoviedb.org/3/search/tv?query=${query}`, {
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

const searchPerson = async (query, setState) => {
  await fetch(`https://api.themoviedb.org/3/search/person?query=${query}`, {
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

const getMovieDetails = async (id, setState) => {
  await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
    headers: {
      Authorization: process.env.REACT_APP_API_TOKEN,
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      setState(json);
    });
};

const getTvDetails = async (id, setState) => {
  await fetch(`https://api.themoviedb.org/3/tv/${id}`, {
    headers: {
      Authorization: process.env.REACT_APP_API_TOKEN,
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      setState(json);
    });
};

const getSimilarMovie = async (id, setState) => {
  await fetch(`https://api.themoviedb.org/3/movie/${id}/similar`, {
    headers: {
      Authorization: process.env.REACT_APP_API_TOKEN,
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      setState(json.results);
    });
};

const getSimilarTv = async (id, setState) => {
  await fetch(`https://api.themoviedb.org/3/tv/${id}/similar`, {
    headers: {
      Authorization: process.env.REACT_APP_API_TOKEN,
    },
  })
    .then((resp) => resp.json())
    .then((json) => {
      setState(json.results);
    });
};

export {
  getPopularMovie,
  getPopularTV,
  getTopMovie,
  getTopTV,
  searchMovie,
  searchPerson,
  searchTv,
  getMovieDetails,
  getTvDetails,
  getSimilarMovie,
  getSimilarTv,
};
