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
import clsx from "clsx"
import s from "../../assets/css/app.module.css"
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
      <div className={clsx(s['bg-custom'], s['p-3'], s['md:p-5'], s['flex'], s['flex-row'], s['gap-4']) + " min-h-[calc(100vh_-_4em)]"}>
        <nav className={clsx(s['hidden'], s['md:inline'],s['border'],s['shadow-lg'], s['bg-white'], s['flex'], s['flex-col'], s['p-3'], s['items-center'], s['w-44'], s['rounded'])}>
          <div className={clsx(s['mb-2'], s['h-16'], s['border-b'], s['w-full'], s['border-b-gray-300'])}>
            <img
              src={user?.avatar ? user.avatar : profile}
              alt="avatar"
              width="60px"
              height="60px"
              className={clsx(
                s['aspect-square'],
                s['mx-auto'],
                s['mb-3'],
                s['border-blue-600'],
                s['border-2'],
                s['rounded-full'],
                s['hover:border-blue-400']
              )}
            />
          </div>
          <ul className={s['w-full']}>{widgetMenu}</ul>
        </nav>
        <div className={clsx(s.relative, s['bg-white'], s['flex-1'], s['p-3'], s['rounded'], s.border, s['shadow-lg'])} style={{ minHeight: "440px" }}>
          <header className={clsx( s['w-full'], s['h-16'], s['pl-2'], s['border-b'], s['border-b-gray-300'], s['flex'], s['flex-row'])}>
            {/* Avatar */}
            <div className={clsx(s['ml-5'], s['md:ml-2'])}>
              <h3 className={clsx(s['text-base'], s['font-bold'])}>{header.title}</h3>
              <p className={clsx(s['text-sm'], s['mt-1'])}>{header.sub}</p>
            </div>
            {keyActive == "list-project" && (
              <div className={clsx(s.absolute, s['right-4'])}>
                <button
                  className={clsx(s['text-white'], s['block'], s['text-center'], s['w-full'], s['py-2'], s['px-5'], s['bg-blue-600'], s['rounded'], s['cursor-pointer'])}
                  onClick={showModal}>
                  Dự án mới
                </button>
              </div>
            )}
            <div className={clsx(s['absolute'], s['right-4'], s['mt-2'], s['md:hidden'])}>
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
          <div className={s['grid-cols-3']} className={s['w-full']}>
            <p>FE</p>
            <Form.Item
              name="html"
              className={clsx(s['inline-block'], s['w-28'])}
              valuePropName="checked"
            >
              <Checkbox onChange={handleCheckbox}>HTML</Checkbox>
            </Form.Item>
            <Form.Item
              name="reactjs"
              className={clsx(s['inline-block'], s['w-28'])}
              valuePropName="checked"
            >
              <Checkbox onChange={handleCheckbox}>ReactJS</Checkbox>
            </Form.Item>
          </div>
          <div className={s['grid-cols-3']}>
            <p>CSS</p>
            <Form.Item
              name="tailwind"
              className={clsx(s['inline-block'], s['w-28'])}
              valuePropName="checked"
            >
              <Checkbox onChange={handleCheckbox}>Tailwind</Checkbox>
            </Form.Item>
            <Form.Item
              name="bootstrap"
              className={clsx(s['inline-block'], s['w-28'])}
              valuePropName="checked"
            >
              <Checkbox onChange={handleCheckbox}>Bootstrap</Checkbox>
            </Form.Item>
          </div>
          <div className="ant-modal-footer">
            <Form.Item className={clsx(s['inline-block'], s['mb-0'], s['mx-4'])}>
              <Button key="back" onClick={handleCancel}>
                Huỷ
              </Button>
            </Form.Item>
            <Form.Item className={clsx(s['inline-block'], s['mb-0'])}>
              <Button
                type="primary"
                htmlType="submit"
                className={clsx(s['bg-blue-500'])}
                onClick={handleOk}
              >
                Tạo
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
}
