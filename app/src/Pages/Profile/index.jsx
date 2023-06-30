import { useEffect, useState } from "react";
import profile from "../../assets/images/avatar.png";
import { useParams, Outlet } from "react-router";
import { Button, Drawer, Menu, Space } from "antd";
import { UserOutlined, GithubOutlined, MenuUnfoldOutlined, CloseOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import UserService from "../../Service/user.service";

export default function Profile() {
  const param = useParams();
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [header, setHeader] = useState({
    title: null,
    sub: null
  })
  const userService = new UserService()
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (!param.userId) return;
    userService.getOne(param.userId).then(res => {
      setUser(res);
    })
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
    <Menu mode="inline" openKeys={openKeys} selectedKeys={keyActive} onOpenChange={onOpenChange}>
      <Menu.SubMenu title="Hồ sơ" key="profile" icon={<UserOutlined />}>
        <Menu.Item key="information"><NavLink to={`/profile/${param.userId}`} onClick={onClose}>Thông tin</NavLink></Menu.Item>
        <Menu.Item key="edit-profile"><NavLink to={`/profile/${param.userId}/edit`} onClick={onClose}>Chỉnh sửa</NavLink></Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu title="Dự án" key="project" icon={<GithubOutlined />}>
        <Menu.Item key="list-project"><NavLink to={`/profile/${param.userId}/list-project`} onClick={onClose}>Danh
          sách</NavLink></Menu.Item>
        <Menu.Item key="share-project"><NavLink to={`/profile/${param.userId}/list-share`} onClick={onClose}>Chia sẻ</NavLink></Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
  return (
    <>
      <div className="bg-custom p-3 md:p-5 h-[calc(100vh_-_4em)] flex flex-row gap-4">
        <nav
          className="hidden md:inline bg-white flex flex-col p-3 items-center w-44 shadow-2xl rounded drop-shadow-lg">
          <div className="mb-2 h-16 border-b w-full  border-b-gray-300">
            <img
              src={user?.avatar ? user.avatar : profile}
              alt="avatar"
              width="60px"
              height="60px"
              className="aspect-square mx-auto mb-3 border-blue-600 border-2 rounded-full hover:border-blue-400"
            />
          </div>
          <ul className="w-full">
            {widgetMenu}
          </ul>
        </nav>
        <div className="bg-white flex-1 p-5 md:p-3  rounded shadow-2xl drop-shadow-lg " style={{ minHeight: "440px" }}>
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
            <div className="absolute right-4 mt-2 md:hidden">
              <MenuUnfoldOutlined style={{
                fontSize: "20px"
              }} onClick={showDrawer}/>
            </div>
          </header>
          <Outlet context={[user, setUser, setKeyActive, setOpenKeys, setHeader]} /></div>
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
            <CloseOutlined onClick={onClose}/>
          </Space>
        }
      >
        {widgetMenu}
      </Drawer>
    </>
  );
}
