const url = process.env.REACT_APP_BACKEND_URL + "/watchlist";

const addToWatchList = (details) => {
  const email = localStorage.getItem("email");
  let bodyObj = { email, details };

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObj),
  });
};

const getWatchList = (setState) => {
  const email = localStorage.getItem("email");

  fetch(url, {
    method: "GET",
    headers: { email: email },
  })
    .then((resp) => resp.json())
    .then((data) => {
      setState(data);
    });
};

export { addToWatchList, getWatchList };
