import { decode } from "./utils/token";
import { message } from "antd";
import { redirect } from "react-router-dom";
import { log, status } from "./utils/log";
import { CustomError } from "./utils/error";

const publicUrlPost = [
  "/user/login",
  "/user/singup",
  "/user/forget-password?email",
];
const publicUrlGet = ["/user/forget-password?email", "/css", "/element"];
export const urlApi = process.env.REACT_APP_BASE_URL;
export default class BaseApi {
  constructor() {
    this.baseUrl = urlApi;
    this.token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    this.headers = {
      "Content-Type": "application/json",
      Authorization: this.token ? "Bearer " + this.token : null,
    };
  }

  async get(url, options = {}) {
    let accept = false;
    for (let pu of publicUrlGet) {
      if (url.startsWith(pu)) {
        accept = true;
      }
    }
    if (!decode(this.token) && !accept) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại");
      return redirect("/login");
    }
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "GET",
      headers: this.headers,
      ...options,
    });

    return this.handleResponse(response);
  }

  async post(url, data, options = {}) {
    if (!decode(this.token) && !publicUrlPost.includes(url)) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại");
      return redirect("/login");
    }
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
      ...options,
    });
    return this.handleResponse(response);
  }
  async put(url, data, options = {}) {
    if (!decode(this.token)) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại");
      return redirect("/login");
    }
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(data),
      ...options,
    });
    return this.handleResponse(response);
  }

  async deleteOne(url, options = {}) {
    if (!decode(this.token)) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại");
      return redirect("/login");
    }
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
      headers: this.headers,
      ...options,
    });
    return this.handleResponse(response);
  }

  async handleResponse(response) {
    if (response.status == status.notAuthentication) {
      message.warning(log.error.tokenInvalid);
      return redirect("/login");
    }
    if (!response.ok) {
      const error = await response.json();
      throw new CustomError(error.message, error.errorKey, error.errorName);
    }
    return response ? response.json() : null;
  }
}
