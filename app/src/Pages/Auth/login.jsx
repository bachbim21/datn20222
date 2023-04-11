import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import AuthService from "./auth.service";
import { message, status } from "../../app.constants";
import Input from "../../Components/Input/Input";
import { handleValidate } from "../../app.validate";

function Login() {
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const configInput = [
    {
      label: "Email",
      id: "email",
      type: "text",
      placeholder: "user@gmail.com",
      dataCheck: [
        {
          name: "required",
          required: "not",
          message: message.log_required,
        },
        {
          name: "maxLength",
          required: 50,
          message: message.log_maxLength50,
        },
        {
          name: "pattern",
          required: "[^s@]+@[^s@]+.[^s@]+$",
          message: message.log_email,
        },
        {
          name: "whitespace",
          required: false,
          message: message.log_not_whitespace,
        },
      ],
    },
    {
      label: "Mật khẩu",
      id: "password",
      type: "password",
      dataCheck: [
        {
          name: "required",
          required: true,
          message: message.log_required,
        },
        {
          name: "minLength",
          required: 6,
          message: message.log_minLength6,
        },
        {
          name: "pattern",
          required: "^[a-zA-Z0-9_-]{6,}$",
          message: message.log_password,
        },
        {
          name: "whitespace",
          required: false,
          message: message.log_not_whitespace,
        },
      ],
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmit(!isSubmit);
    // check match required
    var status = handleValidate(e.target, configInput);
    if (status) {
      try {
        AuthService()
          .login({
            email: e.target[0].value,
            password: e.target[1].value,
            rememberMe: false,
          })
          .then((response) => {
            alert("Thanh cong");
            navigate("/", { replace: true });
          });
      } catch {
        console.error(message.wrong_email);
      }
    }
  };

  return (
    <div className="mx-4 sm:mx-20 relative flex flex-col justify-center min-h-screen overflow-hidden bg-default">
      <div className=" w-full p-6 m-auto h-full  bg-whiteC rounded-md shadow-xl shadow-gray-800 border-2 border-indigo-900 lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 underline uppercase ">
          Login
        </h1>
        <form className="mt-6" onSubmit={handleLogin}>
          {configInput.map((i) => {
            return (
              <div key={i.id} className="mb-2">
                <label
                  htmlFor={i.id}
                  className="block text-base font-semibold text-gray-800">
                  {i.label}
                  <span className="mx-1 font-black">*</span>
                </label>
                <Input
                  id={i.id}
                  type={i.type}
                  isSubmit={isSubmit}
                  dataCheck={JSON.stringify(i.dataCheck)}
                  placeholder={i.placeholder}
                />
              </div>
            );
          })}
          <a
            href="#"
            className="text-md font-light text-gray-700 hover:underline">
            Quên mật khẩu?
          </a>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700"
              type="submit">
              Đăng nhập
            </button>
          </div>
        </form>

        <p className="mt-8  font-light text-center text-gray-700">
          {" "}
          Bạn chưa có tài khoản?{" "}
          <NavLink
            type="button"
            className="font-medium text-gray-700 hover:underline"
            to="/signup">
            Đăng ký
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;
