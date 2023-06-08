import { decode } from "./utils/app.function";
import { message } from "antd";
export default function http() {
  const baseUrl = process.env.REACT_APP_BASE_URL; // địa chỉ cơ sở của API
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  const headers = {
    "Content-Type": "application/json",
    Authorization: token ? "Bearer " + token : null,
  };
  const publicUrlPost = ['/auth/login', '/auth/singup','/auth/forget-password']

  var service = {
    get: get,
    post: post,
    put: put,
    deleteOne: deleteOne,
  };

  return service;
  async function get(url) {
    if(!decode(token)) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại")
      return
    }
    const response = await fetch(`${baseUrl}${url}`, {
      method: "GET",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Something went wrong"); // xử lý lỗi
    }

    return response.json(); // trả về dữ liệu từ response
  }

  async function post(url, data) {
    if(!decode(token) && !publicUrlPost.includes(url)) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại")
      return
    }
    const response = await fetch(`${baseUrl}${url}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Something went wrong"); // xử lý lỗi
    }

    return response.json(); // trả về dữ liệu từ response
  }

  async function put(url, data) {
    if(!decode(token)) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại")
      return
    }
    const response = await fetch(`${baseUrl}${url}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Something went wrong"); // xử lý lỗi
    }

    return response.json(); // trả về dữ liệu từ response
  }

  async function deleteOne(url) {
    if(!decode(token)) {
      message.error("Hết thời gian truy cập vui lòng đăng nhập lại")
      return
    }
    const response = await fetch(`${baseUrl}${url}`, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Something went wrong"); // xử lý lỗi
    }
    return response; // trả về dữ liệu từ response
  }
}
