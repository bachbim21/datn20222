import BaseApi from "../base.service";

export default class ChartService extends BaseApi {
  getChartUser() {
    return this.get("/chart/pie-user")
  }
  getChartBarUser() {
    return this.get("/chart/bar-user")
  }
  getPieProject() {
    return this.get("/chart/pie-project")
  }
}
