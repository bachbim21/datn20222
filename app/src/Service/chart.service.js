import BaseApi from "../base.service";

export default class ChartService extends BaseApi {
  getChartUser() {
    return this.get("/admin/chart/pie-user")
  }
  getChartBarUser() {
    return this.get("/admin/chart/bar-user")
  }
  getPieProject() {
    return this.get("/admin/chart/pie-project")
  }
  getChartBarProject() {
    return this.get("/admin/chart/bar-project")
  }
}
