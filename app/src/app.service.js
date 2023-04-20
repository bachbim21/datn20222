export default function http() {
  const baseUrl = process.env.REACT_APP_BASE_URL; // địa chỉ cơ sở của API
  const token = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  let auth = "Authorization";
  const headers = {
    "Content-Type": "application/json",
    [auth]: `Bearer ${token}`,
  };

  var service = {
    get: get,
    post: post,
    put: put,
    deleteOne: deleteOne,
  };

  return service;
  async function get(url) {
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
    const response = await fetch(`${baseUrl}${url}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Something went wrong"); // xử lý lỗi
    }

    return response.json(); // trả về dữ liệu từ response
  }

  async function put(url, data) {
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
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Something went wrong"); // xử lý lỗi
    }

    return response.json(); // trả về dữ liệu từ response
  }
}
