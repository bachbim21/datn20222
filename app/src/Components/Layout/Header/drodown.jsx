import avatar from "../../../assets/images/avatar.png";
import { Dropdown, message } from "antd";
import { NavLink } from "react-router-dom";
import { decode } from "../../../utils/token";
import { useEffect, useState } from "react";
import UserService from "../../../Service/user.service";
import { useSelector } from "react-redux";
import { flagUpdated } from "../../../redux/selector";
import clsx from "clsx";
import s from "../../../assets/css/app.module.css"
export default function DropDownProfile() {
  const decodedToken = decode();
  const [user, setUser] = useState(null);
  const flagUser = useSelector(flagUpdated);
  const userService = new UserService()
  useEffect(() => {
    if (!decodedToken?.user_id) return
    userService.getOne(decodedToken.user_id).then(res => {
      setUser(res)
    }).catch((e) => {
      message.error("Không có quyền truy cập thông tin")
    });
  }, [flagUser])
  const itemsPopup = [
    {
      label: (
        <NavLink
          className={clsx(s["text-center"])}
          to={`/profile/${decodedToken?.user_id}`}
        >
          Hồ sơ
        </NavLink>
      ),
      key: '1',
    },
    decodedToken?.roles.includes("ROLE_ADMIN") ? {
      label: (
        <NavLink
          className={clsx(s["text-center"])}
          to={`/admin`}
        >
          Quản lý
        </NavLink>
      ),
      key: '4',
    } : null,
    {
      label: (
        <NavLink
          className={clsx(s["text-center"])}
          to={`/profile/${decodedToken?.user_id}/list-project`}
        >
          Dự án
        </NavLink>
      ),
      key: '2',
    },
    {
      label: (
        <NavLink
          className={clsx(s["text-center"])}
          to="/login"
          onClick={() => localStorage.removeItem("token")}
        >
          Đăng xuất
        </NavLink>
      ),
      key: '3',
    },
  ];

  return (
    <Dropdown
      menu={{
        items: itemsPopup,
      }}
      trigger={['click']}
    >
      <div className={clsx(s.flex, s['items-center'], s['mx-8'], s['cursor-pointer'])}>
        <img
          src={user?.avatar ? user.avatar : avatar}
          alt="image avatar"
          className={clsx(
            s['h-10'],
            s['aspect-square'],
            s['border-blue-600'],
            s['border-2'],
            s['rounded-full'],
            s['hover:border-blue-400']
          )}
        />
      </div>
    </Dropdown>
  );
}
