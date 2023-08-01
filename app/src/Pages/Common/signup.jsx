import { NavLink, useNavigate } from "react-router-dom";
import { log } from "../../utils/log";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/go.png";
import { loading } from "../../redux/selector";
import { LoadingService } from "../../Components/Layout/layout.slice";
import AuthService from "../../Service/auth.service";
import Loading from "../../Components/Loading&Popup/loading";
import { Form, Input, Button, message } from "antd";
import { handleError } from "../../utils/error";
export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadingContext = useSelector(loading);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  const authService = new AuthService();
  const onFinish = (values) => {
    dispatch(
      LoadingService({
        text: "Đang xử lý",
        status: true,
      })
    );
    authService
      .signup({
        email: values.email,
        name: values.name,
        password: values.password,
        // birthDate: moment(values.date).valueOf(),
      })
      .then((response) => {
        console.log(response);
        message.success("Thành công");
        dispatch(
          LoadingService({
            text: "",
            status: false,
          })
        );
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        handleError(error);
        dispatch(
          LoadingService({
            text: "",
            status: false,
          })
        );
      });
  };
  return (
    <div className=" flex justify-center items-center min-h-screen overflow-hidde bg-blue-900">
      {loadingContext.status && <Loading text={loadingContext.text} />}
      <div className="mx-4 my-8 sm:mx-0 mobile:w-96 p-6 h-full bg-white rounded-md shadow-md shadow-yellow-300 border-2 max-w-md">
        <img src={logo} alt="logo" className="w-20 h-20 mx-auto" />
        <Form
          name="register"
          validateTrigger="onSubmit"
          onFinish={onFinish}
          style={{ maxWidth: 300, margin: "auto" }}
          layout="vertical"
          autoComplete="off">
          <Form.Item label="Tên" name="name">
            <Input />
          </Form.Item>
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
            label="Mật khẩu"
            name="password"
            rules={[
              { required: true, message: log.error.required },
              { max: 20, message: log.error.maxLength20 },
              { min: 6, message: log.error.minLength6 },
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Xác nhận mật khẩu"
            name="confirm_password"
            dependencies={["password"]}
            rules={[
              { required: true, message: log.error.required },
              { max: 20, message: log.error.maxLength20 },
              { min: 6, message: log.error.minLength6 },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(message.log_not_match_password)
                  );
                },
              }),
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item className="flex justify-center items-end">
            <Button type="primary" htmlType="submit" className="bg-blue-500">
              Đăng ký
            </Button>
          </Form.Item>
        </Form>

        <p className="mobile:mt-8  text-center">
          <span className="mx-4">Bạn đã có tài khoản?</span>
          <NavLink
            type="button"
            className=" hover:text-blue-400 decoration-solid underline "
            to="/login">
            Đăng nhập
          </NavLink>
        </p>
      </div>
    </div>
  );
}
