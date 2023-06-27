import { decode } from "./utils/token";
import { message } from "antd";
import { redirect } from "react-router-dom";
import { log, status } from "./utils/log";

const publicUrlPost = ['/user/login', '/user/singup','/user/forget-password?email']
const publicUrlGet = ['/user/forget-password?email']
export default class BaseApi {
  constructor() {
    this.baseUrl = process.env.REACT_APP_BASE_URL;
    this.token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : null;
    this.headers = {
      "Content-Type": "application/json",
      Authorization: this.token ? "Bearer " + this.token : null,
    };
  }

  async get(url, options = {}) {
    let accept = false
    for (let pu of publicUrlGet) {
      if(url.startsWith(pu)) {
        accept = true
      }
    }
    if(!decode(this.token) && !accept) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại")
      return redirect("/login")
    }
    const response = await fetch(`${this.baseUrl}${url}`, { method: 'GET', headers: this.headers, ...options });
    return this.handleResponse(response);
  }

  async post(url, data, options = {}) {
    if(!decode(this.token) && !publicUrlPost.includes(url)) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại")
      return redirect("/login")
    }
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data),
      ...options,
    });
    return this.handleResponse(response);
  }
  async put(url, data, options = {}) {
    if(!decode(this.token)) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại")
      return redirect("/login")
    }
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(data),
      ...options,
    });
    return this.handleResponse(response);
  }

  async delete(url, options = {}) {
    if(!decode(this.token)) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại")
      return redirect("/login")
    }
    const response = await fetch(`${this.baseUrl}${url}`, { method: 'DELETE', headers: this.headers, ...options });
    return this.handleResponse(response);
  }

  async handleResponse(response) {
    if(response.status == status.notAuthentication) {
      message.warning(log.error.token)
      return redirect("/login")
    }
    if (!response.ok) {
      const errorText = await response.text();
      var keys = errorText.split(".");
      var errorLog = log[keys[0]][keys[1]];
      message.error(errorLog)
      console.log(errorText);
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    // const contentType = response.headers.get('content-type');
    // if (contentType && contentType.includes('application/json')) {
      return response.json();
    // }
    //
    // return response.text();
  }

}
