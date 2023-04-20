import { NavLink, useNavigate } from "react-router-dom";
import { message } from "../../app.constants";
import Input from "../../Components/Input/Input";
import { useState } from "react";
import { handleValidate } from "../../app.function";
import AuthService from "../../Service/auth.service";
export default function Signup() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [password, SetPassword] = useState();
  const navigate = useNavigate();
  const configInput = [
    {
      label: "Tên",
      id: "name",
      type: "text",
      placeholder: "Tên",
      dataCheck: [
        {
          name: "minLength",
          required: 6,
          message: message.log_minLength6,
        },
        {
          name: "maxLength",
          required: 50,
          message: message.log_maxLength50,
        },
      ],
    },
    {
      label: "Email",
      id: "email",
      type: "text",
      placeholder: "user@gmail.com",
      dataCheck: [
        {
          name: "required",
          required: true,
          message: message.log_required,
        },
        {
          name: "pattern",
          required: "[^s@]+@[^s@]+.[^s@]+$",
          message: message.log_email,
        },
        {
          name: "maxLength",
          required: 50,
          message: message.log_maxLength50,
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
      ],
      setState: SetPassword,
    },
    {
      label: "Xác nhận mật khẩu",
      id: "password-current",
      type: "password",
      dataCheck: [
        {
          name: "required",
          required: true,
          message: message.log_required,
        },
        {
          name: "pattern",
          required: "^[a-zA-Z0-9_-]{6,}$",
          message: message.log_password,
        },
        {
          name: "minLength",
          required: 6,
          message: message.log_minLength6,
        },
      ],
      deps: {
        value: [password],
        message: [message.log_not_match_password],
      },
    },
    {
      label: "Ngày sinh",
      id: "date",
      type: "date",
      placeholder: "dd/MM/yyyy",
      dataCheck: [
        {
          name: "date:dd/MM/yyyy",
          required: "dd/MM/yyyy",
          message: message.log_date,
        },
      ],
    },
  ];

  // create user
  const handleSignup = (e) => {
    e.preventDefault();
    setIsSubmit(!isSubmit);
    // check match required
    var status = handleValidate(e.target, configInput);
    console.log(status);
    if (status) {
      setIsloading(true);
      try {
        AuthService()
          .signup({
            name: e.target["name"].value,
            email: e.target["email"].value,
            password: e.target["password"].value,
            birthDay: e.target["date"].value,
          })
          .then((response) => {
            console.log(response);
            setIsloading(false);
            // navigate("/", { replace: true });
          });
      } catch {
        console.error(message.wrong_email);
      }
    }
  };
  return (
    <div className="m-4 sm:mx-10 relative bg-default flex flex-col justify-center min-h-screen">
      <div className="w-full p-6 m-auto h-full  bg-white rounded-md shadow-xl shadow-gray-800 border-2 border-indigo-900 md:w-9/12 lg:max-w-4xl">
        <h1 className="text-3xl font-semibold text-center text-gray-800 underline uppercase ">
          Signup
        </h1>
        <form
          className="mt-6 grid sm:grid-cols-2 gap-x-5"
          onSubmit={handleSignup}>
          {configInput.map((e) => {
            return (
              <div key={e.id} className="mb-2">
                <label
                  htmlFor={e.id}
                  className="block text-base font-semibold text-gray-800">
                  {e.label}
                  <span className="mx-1 font-black">*</span>
                </label>
                <Input
                  id={e.id}
                  type={e.type}
                  setState={e.setState}
                  isSubmit={isSubmit}
                  dataCheck={JSON.stringify(e.dataCheck)}
                  deps={e.deps ? e.deps : null}
                  placeholder={e.placeholder}
                />
              </div>
            );
          })}

          <div className="mt-6 sm:mt-8">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700 border-2 border-gray-800"
              type="submit">
              Xác nhận
            </button>
          </div>
        </form>

        <p className="mt-8  font-light text-center text-gray-700">
          Bạn đã có tài khoản{" "}
          <NavLink
            className="font-medium text-gray-700 hover:underline"
            to="/login">
            Đăng nhập
          </NavLink>
        </p>
      </div>
    </div>
  );
}
