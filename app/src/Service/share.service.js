import BaseApi from "../base.service";

export default class ShareService extends BaseApi {

   create(userId, nodeId, list) {
    return this
      .post(`/share/${userId}/${nodeId}`, list)
  }
   getAll(param) {
    return this
      .get("/share/search?" + param)
  }
   getOne(id) {
    return this
      .get("/share/" + id)
  }
}
