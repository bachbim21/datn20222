import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { UserToken } from "../layout.slice";
import { decoded } from "../../../utils/app.function";
export default function PopupProfile({ id }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UserToken(decoded));
  }, [localStorage.getItem("token")]);
  if (id) {
    return (
      <div className="absolute flex flex-col gap-y-1 mobile:w-40 w-screen p-3 rounded top-12 mobile:right-0 -right-5 bg-custom border border-t-0 ">
        <NavLink
          to={`/profile/${id}`}
          className="block border text-center bg-white hover:bg-gray-300 hover:font-medium">
          Hồ sơ
        </NavLink>
        <NavLink className="block border text-center bg-white hover:bg-gray-300 hover:font-medium">
          Dự án
        </NavLink>
        <NavLink
          to="/login"
          onClick={() => localStorage.removeItem("token")}
          className="block border text-center bg-white hover:bg-gray-300 hover:font-medium">
          Đăng xuất
        </NavLink>
      </div>
    );
  }
}
