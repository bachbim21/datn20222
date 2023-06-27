import BaseApi from "../base.service";

export default class AuthService extends BaseApi {
  forget(email) {
    return this.get(`/user/forget-password?email=${email}`);
  }

  login(data) {
    return this.post('/user/login', data);
  }
  signup(data) {
    return this.post('/user/signup', data);
  }
}