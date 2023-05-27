import logo from "../../../assets/images/go.png";
import avatar from "../../../assets/images/avatar.png";
import { decoded } from "../../../utils/app.function";
import jwt_decode from "jwt-decode";
import PopupProfile from "./popup-profile";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { path } from "../../../redux/selector";

export default function Header(params) {
  const token = localStorage.getItem("token");
  const decodedToken = decoded ? decoded : token ? jwt_decode(token) : null;
  const [showModal, setShow] = useState(false);
  const nodePath = useSelector(path);
  const location = useLocation();
  return (
    <header className="bg-custom fixed w-screen flex flex-row items-center justify-between h-14 z-10 top-0 shadow-md">
      <div className="flex items-center mx-5">
        <NavLink to="/">
          <img src={logo} alt="" className="h-12 object-cover w-20" />
        </NavLink>

        <span className="italic font-sans"></span>
      </div>
      {location.pathname.includes("/project") && (
        <span className="px-4 border border-gray-300 bg-slate-200 rounded">
          {nodePath}
        </span>
      )}
      {decodedToken ? (
        <div
          onClick={() => {
            setShow(!showModal);
          }}
          className="flex items-center mx-5 relative cursor-pointer">
          <img src={avatar} alt="image avatar" className="h-10" />
          {showModal && <PopupProfile id={decodedToken.user_id} />}
        </div>
      ) : (
        <NavLink
          to="/login"
          className="px-2 py-1 text-white text-sm mx-5 bg-blue-600 rounded">
          Đăng nhập
        </NavLink>
      )}
    </header>
  );
}
