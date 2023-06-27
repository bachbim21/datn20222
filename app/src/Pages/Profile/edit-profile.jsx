import { useDispatch } from "react-redux";
import {useOutletContext, NavLink } from "react-router-dom";
import { Button, Form, Input, message, DatePicker } from "antd";
import UserService from "../../Service/user.service";
import profile from "../../assets/images/avatar.png";
import { LoadingService } from "../../Components/Layout/layout.slice";
import { log } from "../../utils/log";
import moment from "moment";
import { useEffect, useState } from "react";
import { DoubleRightOutlined, UploadOutlined } from "@ant-design/icons";
export default function EditProfile() {
  const dispatch = useDispatch()
  const [user, setUser, setKeyActive, setOpenKeys, setHeader] = useOutletContext()
  useEffect(()=>{
    setKeyActive(['edit-profile'])
    setOpenKeys(['profile'])
    setHeader({
      title: "Chỉnh sửa thông tin cá nhân",
      sub: "Quản lý thông tin cá nhân"
    })
  },[])

  function onFinish(value) {
    let newData = {
      ...user,
      name: value.name,
      birthDay: value.birthDay ? value.birthDay.valueOf() : null
    }
    dispatch(LoadingService({
      text: "Đang xử lý...",
      status: true
    }))
    UserService().update(newData.id, newData).then(res => {
      setUser(res)
      message.success("Thành công")
    }).catch(e => {
      message.error("Không thành công")
    })
    dispatch(LoadingService({
      text: "",
      status: false
    }))
  }
  if(user) {
    return <>
      <article className="p-5 flex md:flex-row flex-col">
        <div className="basis-1/2" style={{ maxWidth: "500px" }}>
          <h1 className="text-base ml-10 mb-5">Các thông tin chỉnh sửa</h1>
        <Form
          name="update"
          validateTrigger="onSubmit"
          initialValues={{ name: user?.name, birthDay: moment(user?.birthDay) }}
          onFinish={onFinish}
          style={{ maxWidth: "500px" }}
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 16,
          }}
          autoComplete="off">
          <Form.Item
            label="Tên"
            name="name"
            rules={[
              { required: true, message: log.log_required },
            ]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Ngày sinh"
            name="birthDay"
            rules={[
              { required: true, message: log.log_required },
            ]}
          >
            <DatePicker
              placeholder="Chọn ngày"
              format="DD/MM/YYYY"
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit"
                    className="bg-blue-500 w-full flex justify-center mobile:ml-20 md:block mobile:w-fit">
              Lưu
            </Button>
          </Form.Item>
        </Form>
        </div>
        <div className="px-8 md:border-l md:border-gray-300 h-full basis-1/2">
          <h1 className="text-base ml-10 mb-5">Đổi mật khẩu</h1>
          <Form
            name="update"
            validateTrigger="onSubmit"
            initialValues={{ name: user?.name, birthDay: moment(user?.birthDay) }}
            onFinish={onFinish}
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            autoComplete="off">
            <Form.Item
              label="Mật khẩu hiện tại"
              name="password"
              rules={[
                { required: true, message: log.log_required },
              ]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Mật khẩu mới"
              name="newpass"
              rules={[
                { required: true, message: log.log_required },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Xác nhận mật khẩu"
              name="newpass"
              rules={[
                { required: true, message: log.log_required },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit"
                      className="bg-blue-500 w-full flex justify-center mobile:ml-36 md:block mobile:w-fit">
                Đổi
              </Button>
            </Form.Item>
          </Form>
        </div>
      </article>
    </>;
  }
}