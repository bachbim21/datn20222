import http from "../app.service";

export default function ElementService() {
  var service = {
    getAll: getAll,
    getOne: getOne,
    // create: create,
    // update: update,
    // deleteOne: deleteOne,
  };

  return service;

  function getAll(param) {
    return http()
      .get("/element/search?" + param)
      .then(function (response) {
        return response;
      });
  }
  function getOne(id) {
    return http()
      .get("/element/" + id)
      .then(function (response) {
        return response;
      });
  }
}
