import http from "../app.service";

export default function CssService() {
  var service = {
    getAll: getAll,
  };

  return service;

  function getAll(param) {
    return http()
      .get("/css/search?" + param)
      .then(function (response) {
        return response;
      });
  }
}
