
import BaseApi from "../base.service";

export default class NodeService extends BaseApi {

  getAll(userId) {
    return this.get("/node/project/" + userId);
  }

  getList(param) {
    return this.get("/node/project?" + param);
  }

  getShare(param) {
    return this.get("/node/share?" + param);

  }

  getOne(id) {
    return this.get("/node/" + id);
  }

  create(data) {
    return this.post("/node", data);
  }

  update(data, id) {
    return this.put("/node/" + id, data);
  }

  deleteOne(id) {
    return this.deleteOne("/node/" + id);
  }
}
