import BaseApi from "../base.service";

export default class CssService extends BaseApi {
  getPage(param) {
    return this.get("/css/search?" + param);
  }
}
