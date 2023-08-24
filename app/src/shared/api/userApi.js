export function getBackendUrl() {
  return process.env.REACT_APP_BACKEND_URL;
}

export function userLogin(url, customHeaders) {
  return fetch(getBackendUrl() + url, {
    headers: {
      customHeaders,
      //token: localStorage.getItem("token"),
    },
    method: "GET",
  }).then((x) => x.json);
}
