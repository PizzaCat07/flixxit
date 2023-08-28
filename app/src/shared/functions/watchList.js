const addToWatchList = (details) => {
  const url = process.env.REACT_APP_BACKEND_URL + "/watchlist";
  const email = localStorage.getItem("email");
  let bodyObj = { email, details };

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObj),
  });
};

export { addToWatchList };
