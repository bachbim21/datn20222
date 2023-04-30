import { user } from "../../redux/selector";
import { useEffect, useState, useRef } from "react";
import NodeService from "../../Service/node.sevice";
import { NavLink, useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox, Spin, message, Modal } from "antd";
import { log } from "../../utils/app.constants";
import { useDispatch, useSelector } from "react-redux";
import { LoadingService } from "../../Components/Layout/layout.slice";

export default function Home() {
  const [listNode, setListNode] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(user);
  const [messageApi, contextHolder] = message.useMessage();
  const form = useRef();
  const map = new Map();

  map.set("reactjs", "html");
  map.set("html", "reactjs");
  map.set("tailwind", "bootstrap");
  map.set("bootstrap", "tailwind");

  useEffect(() => {
    if (currentUser.id) {
      NodeService()
        .getAll(currentUser.id)
        .then((res) => {
          setListNode(res);
        });
    }
  }, []);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    let data = {
      name: values.name,
      tech: {
        htmlFrameWork: values.html ? "html" : values.reactjs ? "react" : "html",
        cssFrameWork: values.tailwind
          ? "tailwind"
          : values.bootstrap
          ? "bootstrap"
          : "tailwind",
      },
      level: 0,
      folder: true,
      user: { id: currentUser.id },
    };
    dispatch(
      LoadingService({
        text: "Đang xử lý",
        status: true,
      })
    );
    NodeService()
      .create(data)
      .then((res) => {
        navigate(`/project/${res.id}`);
        handleOk();
        dispatch(
          LoadingService({
            text: "",
            status: false,
          })
        );
        messageApi.open({
          type: "success",
          content: log.success,
          duration: 3,
        });
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
          content: log.log_project,
          duration: 3,
        });
      });
  };
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      var a = map.get(e.target.id.slice(7));
      form.current.setFieldsValue({
        [a]: false,
      });
    }
  };

  return (
    <div
      id="home"
      className="grid sm:grid-cols-2 max-w-7xl mx-auto gap-y-5 sm:gap-x-8 p-4 sm:p-10 md:gap-x-12">
      {contextHolder}
      <div className="text-white bg-black rounded-md sm:p-8 p-4">
        <h1 className="text-4xl font-medium mb-2 text-yellow-400">Chào mừng</h1>
        <p>
          <span className=" text-xl text-yellow-400">Lgo</span>
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 w-full h-48 gap-x-6 overflow-x-auto">
          <div className="bg-yellow-200 rounded border"></div>
          <div className="bg-yellow-200 rounded border"></div>
          <div className="bg-yellow-200 rounded border"></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 rounded-md sm:p-6 p-4 border bg-custom">
        <div className="bg-white rounded-md py-3 px-5 shadow-lg">
          <h3 className="text-base font-medium mb-2">Các chức năng</h3>
          <nav className="px-3">
            <li>Thiết kế trang web</li>
            <li>Tạo nhanh các thuộc tính</li>
            <li>Xem code trực tuyến</li>
            <li>Tải xuống file code</li>
            <NavLink
              className="text-white block text-center md:w-full mt-6 p-2 bg-blue-600 rounded cursor-pointer"
              to="/design">
              Bắt đầu nào
            </NavLink>
          </nav>
        </div>
        <div className="bg-white rounded-md py-3 px-5 shadow-lg">
          <h3 className="text-base font-medium mb-2">
            Bạn chưa có tài khoản ?
          </h3>
          <div className="px-3">
            <p>Hãy đăng ký tài khoản để có thể sử dụng toàn bộ chức năng</p>
            <NavLink
              to="/signup"
              className="text-white block text-center md:w-full mt-6 p-2 bg-blue-600 rounded cursor-pointer">
              Đăng ký tại đây
            </NavLink>
          </div>
        </div>
        {currentUser?.id && (
          <div className="lg:col-span-2 bg-white rounded-md py-3 px-5 shadow-lg">
            <h3 className="text-base font-medium mb-3">Dự án gần đây</h3>
            <ul className="px-3 grid md:grid-cols-2 gap-3  sm:gap-x-6">
              <li className=" bg-yellow-300 rounded p-2 text-center">A</li>
              <li className=" bg-yellow-300 rounded p-2 text-center">B</li>
              <li className=" bg-yellow-300 rounded p-2 text-center">C</li>
              <li className=" bg-yellow-300 rounded p-2 text-center">D</li>
            </ul>
            <button
              className="text-white block text-center w-full mt-6 py-2 px-6 bg-blue-600 rounded cursor-pointer"
              onClick={showModal}>
              Dự án mới
            </button>
          </div>
        )}
      </div>
      <Modal
        title="Tạo dự án"
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}>
        <Form
          name="create"
          ref={form}
          validateTrigger="onSubmit"
          onFinish={onFinish}
          layout="vertical">
          <Form.Item
            label="Tên dự án"
            name="name"
            rules={[{ required: true, message: log.log_required }]}>
            <Input />
          </Form.Item>
          <div className="gird grid-cols-3 w-full">
            <p>FE</p>
            <Form.Item
              name="html"
              className="inline-block w-28"
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>HTML</Checkbox>
            </Form.Item>
            <Form.Item
              name="reactjs"
              className="inline-block w-28"
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>ReactJS</Checkbox>
            </Form.Item>
          </div>
          <div className="gird grid-cols-3">
            <p>CSS</p>
            <Form.Item
              name="tailwind"
              className="inline-block w-28"
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>Tailwind</Checkbox>
            </Form.Item>
            <Form.Item
              name="bootstrap"
              className="inline-block w-28"
              valuePropName="checked">
              <Checkbox onChange={handleCheckbox}>Bootstrap</Checkbox>
            </Form.Item>
          </div>

          <div className="ant-modal-footer">
            <Form.Item className="inline-block mb-0 mx-4">
              <Button key="back" onClick={handleCancel}>
                Huỷ
              </Button>
            </Form.Item>
            <Form.Item className="inline-block mb-0">
              <Button
                type="primary"
                htmlType="submit"
                className="bg-blue-500"
                onClick={handleOk}>
                Tạo
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
// là một trang web
//           giúp những người yêu thích lập trình, nhưng chưa biết bắt đầu từ đâu.
//           Sinh ra để giúp lập trình viên có thể thu nhập kiến thức nhanh chóng,
//           đặc biệt là các bạn Frontend.
