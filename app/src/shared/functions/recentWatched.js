const url = process.env.REACT_APP_BACKEND_URL + "/profile";

const getRecentWatched = (setState) => {
  const email = localStorage.getItem("email");

  fetch(url, {
    method: "GET",
    headers: { email: email, token: localStorage.getItem("userToken") },
  })
    .then((resp) => resp.json())
    .then((data) => {
      setState(data);
    });
};

const getUser = (setState) => {
  const email = localStorage.getItem("email");

  fetch(url + "/user", {
    method: "GET",
    headers: { email: email, token: localStorage.getItem("userToken") },
  })
    .then((resp) => resp.json())
    .then((data) => {
      setState(data);
    });
};

const addToRecentWatched = (details, type) => {
  const email = localStorage.getItem("email");
  const id = details.id;

  console.log(details);
  fetch(url, {
    method: "POST",
    headers: {
      token: localStorage.getItem("userToken"),
      email: email,
      id: id,
      type: type,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(details),
  });
};

export { getRecentWatched, addToRecentWatched, getUser };
