import http from "../app.service";

export default function NodeService() {
  var service = {
    getAll: getAll,
    getOne: getOne,
    create: create,
    update: update,
    deleteOne: deleteOne,
  };

  return service;

  function getAll(userId) {
    const params = "id=" + userId;
    return http()
      .get("/node/project?" + params)
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
  function update(data, id) {
    return http()
      .put("/node/" + id, data)
      .then(function (response) {
        return response;
      });
  }
  function deleteOne(id) {
    return http()
      .deleteOne("/node/" + id)
      .then(function (response) {
        return response;
      });
  }
}
