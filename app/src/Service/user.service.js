import http from "../app.service";

export default function UserService() {
  var service = {
    getOne: getOne,
    // create: create,
    // update: update,
    // deleteOne: deleteOne,
  };

  return service;

  function getOne(id) {
    return http()
      .get("/user/" + id)
      .then(function (response) {
        return response;
      });
  }
}
