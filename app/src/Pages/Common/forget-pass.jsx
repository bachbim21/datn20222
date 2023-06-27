
import {  NavLink } from "react-router-dom";
import { log } from "../../utils/log";
import AuthService from "../../Service/auth.service";
import logo from "../../assets/images/go.png";
import { Form, Input, Button, Checkbox, Spin, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LoadingService } from "../../Components/Layout/layout.slice";
import { loading } from "../../redux/selector";
import Loading from "../../Components/Loading&Popup/loading";

function ForgetPass() {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const loadingContext = useSelector(loading);
  const authService = new AuthService();
  const onFinish = (values) => {
    dispatch(
      LoadingService({
        text: null,
        status: true
      })
    );
    authService.forget(values.email).then(data => {
      message.success(data.text);
      dispatch(
        LoadingService({
          text: null,
          status: false
        })
      );
    }).catch(error => {
      dispatch(
        LoadingService({
          text: null,
          status: false
        })
      );
      });
  };


  return (
    <div className=" flex justify-center items-center min-h-screen overflow-hidde bg-blue-900">
      {contextHolder}
      {loadingContext.status && <Loading text={loadingContext.text} />}
      <div
        className="mx-4 sm:mx-0 mobile:w-96 p-6 h-full bg-white rounded-md shadow-md shadow-yellow-300 border-2 max-w-md">
        <img src={logo} alt="logo" className="w-20 h-20 mx-auto" />
        <Form
          name="forgetpass"
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
                message: log.error.invalidEmail
              }
            ]}>
            <Input placeholder="user@gmail.com" />
          </Form.Item>
          <Form.Item className="flex justify-center">
            <Button type="primary" htmlType="submit" className="bg-blue-500">
              Gửi
            </Button>
          </Form.Item>
        </Form>

        <p className="mt-8 custom-font text-center">
          <NavLink
            type="button"
            className="custom-font hover:text-blue-400 decoration-solid underline mx-5"
            to="/signup">
            Đăng nhập
          </NavLink>
          <NavLink
            type="button"
            className="custom-font hover:text-blue-400 decoration-solid underline mx-5"
            to="/signup">
            Đăng ký
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default ForgetPass;
