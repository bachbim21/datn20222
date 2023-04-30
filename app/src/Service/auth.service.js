import http from "../app.service";

export default function AuthService() {
  var service = {
    login: login,
    signup: signup,
    // update: update,
    // deleteOne: deleteOne,
  };

  return service;

  function login(data) {
    return http()
      .post("/auth/login", data)
      .then(function (response) {
        return response;
      });
  }
  function signup(data) {
    return http()
      .post("/auth/signup", data)
      .then(function (response) {
        return response;
      });
  }
  // async getUserInfo() {
  //   const response = await this.get("/user");

  //   return response;
  // }
}
