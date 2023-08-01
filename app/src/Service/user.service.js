import BaseApi from "../base.service";

export default class UserService extends BaseApi {

  getOne(id) {
    return this.get("/user/" + id);
  }

  update(id, data) {
    return this.put("/user/" + id, data);
  }

  getShareEmail(userId, nodeId) {
    return this.get("/user/share?userId=" + userId + "&nodeId=" + nodeId);
  }
  getPage(params) {
    return this.get("/user/search?" + params);
  }
}
