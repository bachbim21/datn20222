import http from "../../app.service";

export default function AuthService() {
  var service = {
    login: login,
    // create: create,
    // update: update,
    // deleteOne: deleteOne,
  };

  return service;

  function login(data) {
    return http()
      .post("/auth/login", data)
      .then(function (response) {
        localStorage.setItem("token", response.token);
        return response;
      });
  }

  // async getUserInfo() {
  //   const response = await this.get("/user");

  //   return response;
  // }
}
