export function getBackendUrl() {
  return process.env.REACT_APP_BACKEND_URL;
}

export function userLogin(url, customHeaders) {
  console.log(getBackendUrl() + url);
  return fetch(getBackendUrl() + url, {
    headers: {
      customHeaders,
      //token: localStorage.getItem("token"),
    },
  }).then((x) => x.json());
}
