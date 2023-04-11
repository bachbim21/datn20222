import http from "../app.service";

export default function ElementService() {
  var service = {
    getAll: getAll,
    // create: create,
    // update: update,
    // deleteOne: deleteOne,
  };

  return service;

  function getAll() {
    return http()
      .get("/element")
      .then(function (response) {
        return response;
      });
  }
}
