import http from "../app.service";

export default function NodeService() {
  var service = {
    getAll: getAll,
    getOne: getOne,
    create: create,
    // update: update,
    // deleteOne: deleteOne,
  };

  return service;

  function getAll(userId) {
    const params = "id=" + userId;
    return http()
      .get("/node?" + params)
      .then(function (response) {
        return response;
      });
  }
  function getOne(id) {
    return http()
      .get("/node/" + id)
      .then(function (response) {
        return response;
      });
  }
  function create(data) {
    return http()
      .post("/node", data)
      .then(function (response) {
        return response;
      });
  }
}
