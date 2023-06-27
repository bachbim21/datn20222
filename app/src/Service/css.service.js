import BaseApi from "../base.service";

export default class CssService extends BaseApi {
   getAll(param) {
    return this.get("/css/search?" + param)

  }
}
