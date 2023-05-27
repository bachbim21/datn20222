import { NavLink, useNavigate } from "react-router-dom";
import { log } from "../../utils/app.constants";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/images/go.png";
import { loading } from "../../redux/selector";
import { LoadingService } from "../../Components/Layout/layout.slice";
import AuthService from "../../Service/auth.service";
import { LoadingOutlined } from "@ant-design/icons";
import moment from "moment";
import { Form, Input, Button, DatePicker, Spin, message } from "antd";
export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;
  const loadingContext = useSelector(loading);
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  const onFinish = (values) => {
    dispatch(
      LoadingService({
        text: "Đang xử lý",
        status: true,
      })
    );
    AuthService()
      .signup({
        email: values.email,
        name: values.name,
        password: values.password,
        // birthDate: moment(values.date).valueOf(),
      })
      .then((response) => {
        dispatch(
          LoadingService({
            text: "",
            status: false,
          })
        );
        messageApi.open({
          type: "success",
          content: log.signup_success,
          duration: 3,
        });
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((e) => {
        dispatch(
          LoadingService({
            text: "",
            status: false,
          })
        );
        messageApi.open({
          type: "error",
          content: log.email_exits,
          duration: 3,
        });
      });
  };
  return (
    <div className=" flex justify-center items-center min-h-screen overflow-hidde bg-blue-900">
      {contextHolder}
      <Spin
        className="bg-white/30 rounded-lg"
        tip={loadingContext.text}
        size="large"
        indicator={antIcon}
        spinning={loadingContext.status}>
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
                { required: true, message: message.log_required },
                {
                  type: "email",
                  message: message.log_email,
                },
              ]}>
              <Input placeholder="user@gmail.com" />
            </Form.Item>
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[
                { required: true, message: message.log_required },
                { max: 20, message: message.log_maxLength20 },
                { min: 6, message: message.log_minLength6 },
              ]}>
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Xác nhận mật khẩu"
              name="confirm_password"
              dependencies={["password"]}
              rules={[
                { required: true, message: message.log_required },
                { max: 20, message: message.log_maxLength20 },
                { min: 6, message: message.log_minLength6 },
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

          <p className="mobile:mt-8 custom-font text-center">
            <span className="mx-4">Bạn đã có tài khoản?</span>
            <NavLink
              type="button"
              className="custom-font hover:text-blue-400 decoration-solid underline "
              to="/login">
              Đăng nhập
            </NavLink>
          </p>
        </div>
      </Spin>
    </div>
  );
}
