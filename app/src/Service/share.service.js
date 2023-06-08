import http from "../app.service";

export default function ShareService() {
  var service = {
    getAll: getAll,
    getOne: getOne,
    create: create,
    // update: update,
    // deleteOne: deleteOne,
  };

  return service;
  function create(userId, nodeId, list) {
    return http()
      .post(`/share/${userId}/${nodeId}`, list)
      .then(function (response) {
        return response;
      });
  }
  function getAll(param) {
    return http()
      .get("/share/search?" + param)
      .then(function (response) {
        return response;
      });
  }
  function getOne(id) {
    return http()
      .get("/share/" + id)
      .then(function (response) {
        return response;
      });
  }
}
