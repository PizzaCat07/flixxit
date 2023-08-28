const url = process.env.REACT_APP_BACKEND_URL + "/watchlist";

const addToWatchList = (details, type) => {
  const email = localStorage.getItem("email");
  let bodyObj = { email, type, details };

  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyObj),
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (!data.success) {
        alert("This is already in the Watchlist");
      }
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

const removeWatchList = (_id, setState) => {
  console.log(_id);

  fetch(url, {
    method: "DELETE",
    headers: { _id },
  })
    .then((resp) => resp.json())
    .then((data) => {
      setState(true);
    });
};

export { addToWatchList, getWatchList, removeWatchList };
