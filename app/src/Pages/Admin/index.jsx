import { Drawer, Menu, Space } from "antd";
import { CloseOutlined, GithubOutlined, UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/go.png";
import { AreaChartOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Outlet } from "react-router";
import DropDownProfile from "../../Components/Layout/Header/drodown";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"
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
        className={clsx(
          s['bg-custom'],
          s['fixed'],
          s['top-0'],
          s['w-16'],
          s['h-screen'],
          s['shadow-xl'],
          s['border-r-2'],
          s['border-gray-300'],
          s['float-left'],
          s['left-0'],
          s['top-o']
        )}
      >
        <NavLink to="/">
          <img src={logo} alt="logo" className={clsx(s['w-14'], s['h-14'], s['ml-1'])} />
        </NavLink>
        <ul className={clsx(s['flex'], s['flex-col'], s['justify-center'], s['gap-y-4'])}>
          <li>
            <AreaChartOutlined
              className={
                openKeys.includes("chart") ? clsx(s['block'], s['text-blue-600']) : clsx(s['block'])
                }
            />
          </li>
          <li>
            <GithubOutlined
              className={
                openKeys.includes("resources") ? clsx(s['block'], s['text-blue-600']) : clsx(s['block'])
                }
            />
          </li>
          <li>
            <UsergroupAddOutlined
              className={
                openKeys.includes("list-user") ?clsx(s['block'], s['text-blue-600']) : clsx(s['block'])
                }
            />
          </li>
        </ul>
      </nav>
      <div className={clsx(s['pl-16'])}>
        <header
          className={clsx(
            s['h-14'],
            s['fixed'],
            s['top-0'],
            s['border-b'],
            s['border-gray-300'],
            s['bg-custom'],
            s['min-w-[calc(100%_-_3.5rem)]'],
            s['z-10'],
            s['flex'],
            s['flex-row'],
            s['justify-between'],
            s['items-center'],
            s['shadow-xl']
          )}
        >
          <h1 className={clsx(s['text-lg'], s['font-base'], s['ml-5'])}>{header}</h1>
          <DropDownProfile />
        </header>
        <article
          className={clsx(
            s['bg-custom'],
            s['flex'],
            s['min-h-[calc(100vh_-_3.5em)]'],
            s['w-full'],
            s['p-3'],
            s['mt-14']
          )}
        >
          <Outlet context={[setKeyActive, setOpenKeys, setHeader]} />
        </article>
      </div>
      <Drawer
        title={
          <div className={clsx(s['relative'])}>
            <NavLink to="/">
              {" "}
              <img
                src={logo}
                alt="logo"
                className={clsx(s['absolute'], s['w-14'], s['h-14'], s['ml-1'], s['-top-3.5'])}
              />
            </NavLink>
            <h1 className={clsx(s['ml-20'])}>Hệ thống Lgo</h1>
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
        }
      >
        {widgetMenu}
      </Drawer>
    </main>
  );
}
