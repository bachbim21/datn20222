import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import AuthService from "../../Service/auth.service";
import { log } from "../../utils/log";
import logo from "../../assets/images/go.png";
import { Form, Input, Button, Checkbox, Spin, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LoadingService } from "../../Components/Layout/layout.slice";
import { loading } from "../../redux/selector";
import Loading from "../../Components/Loading&Popup/loading";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [remember, setRemember] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  const loadingContext = useSelector(loading);
  const authService = new AuthService()
  const onFinish = (values) => {
    dispatch(
      LoadingService({
        text: null,
        status: true,
      })
    );
    authService.login(values)
      .then((response) => {
        localStorage.setItem("token", response.token);
        dispatch(
          LoadingService({
            text: null,
            status: false,
          })
        );
        navigate("/", { replace: true });
      })
      .catch((e) => {
        dispatch(
          LoadingService({
            text: null,
            status: false,
          })
        );
      });
  };

  const onRememberChange = (e) => {
    setRemember(e.target.checked);
  };

  return (
    <div className=" flex justify-center items-center min-h-screen overflow-hidde bg-blue-900">
      {contextHolder}
      {loadingContext.status && <Loading text = {loadingContext.text}/>}
        <div className="mx-4 sm:mx-0 mobile:w-96 p-6 h-full bg-white rounded-md shadow-md shadow-yellow-300 border-2 max-w-md">
          <img src={logo} alt="logo" className="w-20 h-20 mx-auto" />
          <Form
            name="login"
            validateTrigger="onSubmit"
            initialValues={{ remember: false }}
            onFinish={onFinish}
            style={{ maxWidth: 300, margin: "auto" }}
            layout="vertical"
            autoComplete="off">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: log.error.required },
                {
                  type: "email",
                  message: log.error.invalidEmail,
                },
              ]}>
              <Input placeholder="user@gmail.com" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: log.error.required },
                { max: 20, message: log.error.maxLength20 },
                { min: 6, message: log.error.minLength6 },
              ]}>
              <Input.Password />
            </Form.Item>
            <div className="flex flex-row justify-between">
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox onChange={onRememberChange}>Nhớ mật khẩu</Checkbox>
              </Form.Item>
              <div className="flex items-center" style={{ height: "32px" }}>
                <NavLink
                  className="decoration-solid underline "
                  to="/forget-password"
                  style={{ height: "22px" }}>
                  Quên mật khẩu ?
                </NavLink>
              </div>
            </div>

            <Form.Item className="flex justify-center">
              <Button type="primary" htmlType="submit" className="bg-blue-500">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>

          <p className="mt-8 custom-font text-center">
            <span className="mx-4">Bạn chưa có tài khoản?</span>
            <NavLink
              type="button"
              className="custom-font hover:text-blue-400 decoration-solid underline "
              to="/signup">
              Đăng ký
            </NavLink>
          </p>
        </div>
    </div>
  );
}

export default Login;
