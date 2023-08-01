import { useEffect, useState, useRef } from "react";
import profile from "../../assets/images/avatar.png";
import { useParams, Outlet, useNavigate } from "react-router";
import { decode } from "../../utils/token";
import { log } from "../../utils/log";
import { useDispatch } from "react-redux";
import {
  Button,
  Drawer,
  Menu,
  Space,
  Modal,
  Form,
  Input,
  Checkbox,
  message,
} from "antd";
import {
  UserOutlined,
  GithubOutlined,
  MenuUnfoldOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { LoadingService } from "../../Components/Layout/layout.slice";
import { NavLink } from "react-router-dom";
import UserService from "../../Service/user.service";
import NodeService from "../../Service/node.service";
import { handleError } from "../../utils/error";
export default function Profile() {
  const param = useParams();
  const form = useRef();
  const map = new Map();
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const nodeService = new NodeService();
  const navigate = useNavigate();
  map.set("reactjs", "html");
  map.set("html", "reactjs");
  map.set("tailwind", "bootstrap");
  map.set("bootstrap", "tailwind");
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [header, setHeader] = useState({
    title: null,
    sub: null,
  });
  const decoded = decode();

  const userService = new UserService();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (!param.userId) return;
    userService.getOne(param.userId).then((res) => {
      setUser(res);
    });
  }, []);
  const [keyActive, setKeyActive] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  const listKey = ["profile", "project"];
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (listKey.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const widgetMenu = (
    <Menu
      mode="inline"
      openKeys={openKeys}
      selectedKeys={keyActive}
      onOpenChange={onOpenChange}>
      <Menu.SubMenu title="Hồ sơ" key="profile" icon={<UserOutlined />}>
        <Menu.Item key="information">
          <NavLink to={`/profile/${param.userId}`} onClick={onClose}>
            Thông tin
          </NavLink>
        </Menu.Item>
        <Menu.Item key="edit-profile">
          <NavLink to={`/profile/${param.userId}/edit`} onClick={onClose}>
            Chỉnh sửa
          </NavLink>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title="Dự án" key="project" icon={<GithubOutlined />}>
        <Menu.Item key="list-project">
          <NavLink
            to={`/profile/${param.userId}/list-project`}
            onClick={onClose}>
            Danh sách
          </NavLink>
        </Menu.Item>
        <Menu.Item key="share-project">
          <NavLink to={`/profile/${param.userId}/list-share`} onClick={onClose}>
            Chia sẻ
          </NavLink>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
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
    if (!decoded) return;
    let data = {
      parentId: 0,
      name: values.name,
      tech: {
        htmlFrameWork: values.html ? "html" : values.reactjs ? "react" : "html",
        cssFrameWork: values.tailwind
          ? "tailwind"
          : values.bootstrap
          ? "bootstrap"
          : "tailwind",
      },
      file: false,
      user: { id: decoded.user_id },
    };
    dispatch(
      LoadingService({
        text: "Đang xử lý",
        status: true,
      })
    );
    nodeService
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
        handleError(e);
        dispatch(
          LoadingService({
            text: "",
            status: false,
          })
        );
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
    <>
      <div className="bg-custom p-3 md:p-5 h-[calc(100vh_-_4em)] flex flex-row gap-4">
        <nav className="hidden md:inline bg-white flex flex-col p-3 items-center w-44 shadow-2xl rounded drop-shadow-lg">
          <div className="mb-2 h-16 border-b w-full  border-b-gray-300">
            <img
              src={user?.avatar ? user.avatar : profile}
              alt="avatar"
              width="60px"
              height="60px"
              className="aspect-square mx-auto mb-3 border-blue-600 border-2 rounded-full hover:border-blue-400"
            />
          </div>
          <ul className="w-full">{widgetMenu}</ul>
        </nav>
        <div
          className="bg-white flex-1 p-5 md:p-3  rounded shadow-2xl drop-shadow-lg "
          style={{ minHeight: "440px" }}>
          <header className="w-full h-16 pl-2 border-b border-b-gray-300 flex flex-row">
            <img
              src={user?.avatar ? user.avatar : profile}
              alt="avatar"
              className="md:hidden aspect-square h-14 w-14 border-blue-600 border-2 rounded-full hover:border-blue-400"
            />
            <div className="ml-5 md:ml-2">
              <h3 className="text-base font-bold">{header.title}</h3>
              <p className="text-sm mt-1">{header.sub}</p>
            </div>
            {keyActive == "list-project" && (
              <div className="absolute right-4 -top-2">
                <button
                  className="text-white block text-center w-full mt-6 py-2 px-6 bg-blue-600 rounded cursor-pointer"
                  onClick={showModal}>
                  Dự án mới
                </button>
              </div>
            )}
            <div className="absolute right-4 mt-2 md:hidden">
              <MenuUnfoldOutlined
                style={{
                  fontSize: "20px",
                }}
                onClick={showDrawer}
              />
            </div>
          </header>
          <Outlet
            context={[user, setUser, setKeyActive, setOpenKeys, setHeader]}
          />
        </div>
      </div>
      <Drawer
        title="Lgo"
        placement="right"
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        extra={
          <Space>
            <CloseOutlined onClick={onClose} />
          </Space>
        }>
        {widgetMenu}
      </Drawer>
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
    </>
  );
}
