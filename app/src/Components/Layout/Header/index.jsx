import logo from "../../../assets/images/go.png";
import avatar from "../../../assets/images/avatar.png";
import { decoded } from "../../../utils/app.function";
import jwt_decode from "jwt-decode";
import PopupProfile from "./popup-profile";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { path } from "../../../redux/selector";
import { Dropdown, Space, message } from "antd";
import { CiSaveUp1 } from "react-icons/ci";
import { BsCodeSquare, BsFillShareFill } from "react-icons/bs";
import { node } from "../../../redux/selector";
import NodeService from "../../../Service/node.sevice";
import { SetNode } from "../../../Pages/Project/node.slice";

export default function Header() {
  const token = localStorage.getItem("token");
  const decodedToken = decoded ? decoded : token ? jwt_decode(token) : null;
  const dispatch = useDispatch();
  const [showModal, setShow] = useState(false);
  const nodePath = useSelector(path);
  const currentNode = useSelector(node);
  const location = useLocation();
  const items = [
    {
      key: "save",
      label: <span onClick={handleSave}>Lưu</span>,
      icon: <CiSaveUp1 size="20px" />,
    },
    {
      key: "share",
      label: <span>Chia sẻ</span>,
      icon: <BsFillShareFill size="15px" />,
    },
    {
      key: "code",
      label: <span>Xem code</span>,
      icon: <BsCodeSquare size="15px" />,
    },
  ];
  function handleSave() {
    let currentDom = document.getElementById("root-page");
    if (currentDom != null) {
      var stringCode = currentDom.outerHTML.toString();

      let finalCode = stringCode
        .replaceAll("hover-dashed", "")
        .replaceAll("click-border", "");
      let update = {
        ...currentNode,
        code: finalCode,
      };
      NodeService()
        .update(update, update.id)
        .then((res) => {
          message.success("Lưu thành công");
          dispatch(SetNode(res));
        })
        .catch((e) => message.error("Lưu không thành công!"));
    }
  }
  return (
    <header className="bg-custom fixed w-screen flex flex-row items-center justify-between h-14 top-0 shadow-md z-50">
      <div className="flex items-center mx-5">
        <NavLink to="/">
          <img src={logo} alt="" className="h-12 object-cover w-20" />
        </NavLink>

        <span className="italic font-sans"></span>
      </div>
      {location.pathname.includes("/project") && location != null && (
        <div className="px-4 cursor-pointer border bg-white rounded">
          <Dropdown
            placement="bottom"
            menu={{
              items,
            }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>{nodePath}</Space>
            </a>
          </Dropdown>
        </div>
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
