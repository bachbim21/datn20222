import { Drawer, Menu, Space } from "antd";
import { CloseOutlined, GithubOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/go.png";
import { AreaChartOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Outlet } from "react-router";
import DropDownProfile from "../../Components/Layout/Header/drodown";

export default function Admin() {
  const [open, setOpen] = useState(false);
  const [header, setHeader] = useState("");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [keyActive, setKeyActive] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  const listKey = ["chart", "resources", "list-user"];
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
      <Menu.SubMenu title="Thống kê" key="chart" icon={<AreaChartOutlined />}>
        <Menu.Item key="chart-user">
          <NavLink to={`/admin/chart-user`} onClick={onClose}>
            Người dùng
          </NavLink>
        </Menu.Item>
        <Menu.Item key="chart-project">
          <NavLink to={`/admin/chart-project`} onClick={onClose}>
            Dự án
          </NavLink>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        title="Tài nguyên"
        key="resources"
        icon={<GithubOutlined />}>
        <Menu.Item key="resources-html">
          <NavLink to={`/admin/resources-html`} onClick={onClose}>
            Phần tử HTML
          </NavLink>
        </Menu.Item>
        <Menu.Item key="resources-css">
          <NavLink to={`/admin/resources-css`} onClick={onClose}>
            Class CSS
          </NavLink>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.SubMenu
        title="Quản lý người dùng"
        key="users"
        icon={<UsergroupAddOutlined />}>
        <Menu.Item key="users-list">
          <NavLink to={`/admin/list-user`} onClick={onClose}>
            Người dùng
          </NavLink>
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
  return (
    <main className="">
      <nav
        onMouseEnter={showDrawer}
        className="bg-custom fixed top-0 w-16 h-screen shadow-2xl border-r-2 float-left left-0 top-o ">
        <NavLink to="/">
          <img src={logo} alt="logo" className="w-14 h-14 ml-1" />
        </NavLink>
        <ul className="flex flex-col justify-center gap-y-4">
          <li>
            <AreaChartOutlined
              className={
                openKeys.includes("chart") ? "block text-blue-600" : "block"
              }
            />
          </li>
          <li>
            <GithubOutlined
              className={
                openKeys.includes("resources") ? "block text-blue-600" : "block"
              }
            />
          </li>
          <li>
            <UsergroupAddOutlined
              className={
                openKeys.includes("list-user") ? "block text-blue-600" : "block"
              }
            />
          </li>
        </ul>
      </nav>
      <div className="pl-16">
        <header className="h-14 fixed top-0 bg-custom min-w-[calc(100%_-_3.5rem)] z-10 flex flex-row justify-between items-center shadow-xl drop-shadow-md">
          <h1 className="text-lg font-base ml-5">{header}</h1>
          <DropDownProfile />
        </header>
        <article className="bg-custom flex min-h-[calc(100vh_-_3.5em)] w-full p-3 mt-14">
          <Outlet context={[setKeyActive, setOpenKeys, setHeader]} />
        </article>
      </div>
      <Drawer
        title={
          <div className="relative">
            <NavLink to="/">
              {" "}
              <img
                src={logo}
                alt="logo"
                className="absolute w-14 h-14 ml-1 -top-3.5"
              />
            </NavLink>
            <h1 className="ml-20">Hệ thống Lgo</h1>
          </div>
        }
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <CloseOutlined onClick={onClose} />
          </Space>
        }>
        {widgetMenu}
      </Drawer>
    </main>
  );
}
