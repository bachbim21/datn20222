import { useEffect, useRef } from "react";
import UserService from "../../Service/user.service";
import { NavLink } from "react-router-dom";
import { Button, message } from "antd";
import profile from "../../assets/images/avatar.png";
import { UploadOutlined } from "@ant-design/icons";
import { SetUserUpdated } from "../../Components/Layout/layout.slice";
import { useDispatch } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { handleError } from "../../utils/error";
export default function Infor() {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [user, setUser, setKeyActive, setOpenKeys, setHeader] =
    useOutletContext();
  const userService = new UserService();
  useEffect(() => {
    setOpenKeys(["profile"]);
    setKeyActive(["information"]);
    setHeader({
      title: "Thông tin thông tin cá nhân",
      sub: "Quản lý thông tin cá nhân",
    });
  }, [user]);
  function convertMillisecondsToDate(milliseconds) {
    if (milliseconds == null) return;
    const date = new Date(milliseconds);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;

    return `${formattedDay}/${formattedMonth}/${year}`;
  }

  function handleUploadImg(event) {
    event.preventDefault();
    let file = event.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "lgo-image");
    data.append("cloud_name", "lgo-hust");

    fetch("https://api.cloudinary.com/v1_1/lgo-hust/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        updateImage(data.url);
      })
      .catch((err) => {
        message.error("Không thành công!");
      });
  }
  function updateImage(url) {
    userService
      .update(user.id, { ...user, avatar: url })
      .then((response) => {
        dispatch(SetUserUpdated());
        setUser(response);
        message.success("Thành công");
      })
      .catch((e) => {
        handleError(e);
      });
  }
  return (
    <>
      <article className="flex md:flex-row flex-col">
        <div
          className=" grid grid-cols-2 p-5 gap-y-2 h-fit basis-1/2"
          style={{ maxWidth: "500px" }}>
          <p className="">Email :</p>
          <p>{user?.email}</p>
          <p className="">Tên :</p>
          <p>{user?.name}</p>
          <p className="">Ngày sinh :</p>
          <p>{convertMillisecondsToDate(user?.birthDay)}</p>
        </div>
        <div className="p-5 flex-1 md:border-l md:border-gray-300 h-full">
          <img
            className="aspect-square mx-auto mb-3 border-blue-600 border-2 rounded-full hover:border-blue-400"
            src={user?.avatar ? user.avatar : profile}
            width="120px"
            height="120px"
          />
          <input
            ref={fileInputRef}
            type="file"
            id="avatar"
            name="avatar"
            className="p-upImg hidden"
            onChange={handleUploadImg}
            accept="image/*"
          />
          <Button
            icon={<UploadOutlined size="50px" />}
            className="mx-auto my-4 block"
            type="primary"
            onClick={() => fileInputRef.current.click()}>
            Tải lên
          </Button>
        </div>
      </article>
    </>
  );
}
