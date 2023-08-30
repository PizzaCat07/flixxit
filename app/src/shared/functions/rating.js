const url = process.env.REACT_APP_BACKEND_URL + "/rating";

const getRatings = (id, setUpCount, setDownCount, setThumb) => {
  const email = localStorage.getItem("email");
  fetch(url, {
    headers: {
      email: email,
      token: localStorage.getItem("userToken"),
      id: id,
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      const results = data[0];
      const vote = results.rating.find((el) => el.email == email);
      setDownCount(results.downCount);
      setUpCount(results.upCount);
      if (vote) {
        setThumb(vote.vote);
      }
    });
};

const updateRating = (id, vote, upCount, downCount) => {
  const email = localStorage.getItem("email");
  const bodyObj = {
    rating: {
      email: email,
      vote: vote,
    },
    upCount,
    downCount,
  };

  fetch(url, {
    method: "PATCH",
    headers: {
      email: email,
      token: localStorage.getItem("userToken"),
      id: id,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyObj),
  });
};

export { getRatings, updateRating };
