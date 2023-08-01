import BaseApi from "../base.service";

export default class ElementService extends BaseApi {
  getPage(param) {
    return this.get("/element/search?" + param);
  }

  getOne(id) {
    return this.get("/element/" + id);
  }
}
