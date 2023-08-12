import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { Button, Form, Input, message, DatePicker } from "antd";
import UserService from "../../Service/user.service";
import profile from "../../assets/images/avatar.png";
import { LoadingService } from "../../Components/Layout/layout.slice";
import { log } from "../../utils/log";
import moment from "moment";
import { useEffect } from "react";
import { handleError } from "../../utils/error";
import clsx from "clsx"
import s from "../../assets/css/app.module.css"
export default function EditProfile() {
  const dispatch = useDispatch();
  const [user, setUser, setKeyActive, setOpenKeys, setHeader] =
    useOutletContext();
  useEffect(() => {
    setKeyActive(["edit-profile"]);
    setOpenKeys(["profile"]);
    setHeader({
      title: "Chỉnh sửa thông tin cá nhân",
      sub: "Quản lý thông tin cá nhân",
    });
  }, []);

  function onFinish(value) {
    let newData = {
      ...user,
      name: value.name,
      birthDay: value.birthDay ? value.birthDay.valueOf() : null,
    };
    dispatch(
      LoadingService({
        text: "Đang xử lý...",
        status: true,
      })
    );
    UserService()
      .update(newData.id, newData)
      .then((res) => {
        setUser(res);
        message.success("Thành công");
      })
      .catch((e) => {
        handleError(e);
      });
    dispatch(
      LoadingService({
        text: "",
        status: false,
      })
    );
  }
  if (user) {
    return (
      <>
        <article className={clsx(s['p-5'], s['flex'], s['md:flex-row'], s['flex-col'])}>
          <div className={clsx(s['basis-1/2'])} style={{ maxWidth: "500px" }}>
            <h1 className={clsx(s['text-base'], s['ml-10'], s['mb-5'])}>Các thông tin chỉnh sửa</h1>
            <Form
              name="update"
              validateTrigger="onSubmit"
              initialValues={{
                name: user?.name,
                birthDay: moment(user?.birthDay),
              }}
              onFinish={onFinish}
              style={{ maxWidth: "500px" }}
              labelCol={{
                span: 6,
              }}
              wrapperCol={{
                span: 14,
              }}
              autoComplete="off">
              <Form.Item
                label="Tên"
                name="name"
                rules={[{ required: true, message: log.error.required }]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="Ngày sinh"
                name="birthDay"
                rules={[{ required: true, message: log.error.required }]}>
                <DatePicker
                  placeholder="Chọn ngày"
                  format="DD/MM/YYYY"
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={clsx(s['bg-blue-500'], s['w-full'], s['flex'], s['justify-center'], s['mobile:ml-20'], s['md:block'], s['mobile:w-fit'])}>
                  Lưu
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className={clsx(s['mobile:px-8'], s['md:border-l'], s['md:border-gray-300'], s['h-full'], s['basis-1/2'])}>
            <h1 className={clsx(s['text-base'], s['ml-10'], s['mb-5'])}>Đổi mật khẩu</h1>
            <Form
              name="update"
              validateTrigger="onSubmit"
              initialValues={{
                name: user?.name,
                birthDay: moment(user?.birthDay),
              }}
              onFinish={onFinish}
              labelCol={{
                span: 10,
              }}
              wrapperCol={{
                span: 14,
              }}
              autoComplete="off">
              <Form.Item
                label="Mật khẩu hiện tại"
                name="password"
                rules={[{ required: true, message: log.error.required }]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="Mật khẩu mới"
                name="newpass"
                rules={[{ required: true, message: log.error.required }]}>
                <Input />
              </Form.Item>
              <Form.Item
                label="Xác nhận mật khẩu"
                name="newpass"
                rules={[{ required: true, message: log.error.required }]}>
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className={clsx(s['bg-blue-500'], s['w-full'], s['flex'], s['justify-center'], s['mobile:ml-36'], s['md:block'], s['mobile:w-fit'])}>
                  Đổi
                </Button>
              </Form.Item>
            </Form>
          </div>
        </article>
      </>
    );
  }
}
