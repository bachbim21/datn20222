import { useEffect } from "react";
import profile from "../../assets/images/avatar.png";
import UserService from "../../Service/user.service";
import { useParams } from "react-router";
export default function Profile() {
  const param = useParams();

  useEffect(() => {
    UserService()
      .getOne(param.userId)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="bg-custom m-3 rounded-sm p-3">
      <header className="bg-white flex flex-row items-center rounded-l-full rounded-r">
        <img
          src={profile}
          alt="avatar"
          width="60px"
          height="60px"
          className="inline-block border-blue-600 border-2 rounded-full hover:border-blue-400"
        />
        <h3 className="inline-block text-base flex-grow font-bold text-center">
          Quản lý hồ sơ
        </h3>
      </header>
      <div className=" grid grid-cols-3">
        <p>Tên</p>
        <p className=" col-span-2">Cuong</p>
        <p>Email</p>
        <p className=" col-span-2">admin@gmail.com</p>
        <p>Ngày sinh</p>
        <p className=" col-span-2">22 01</p>
      </div>
    </div>
  );
}
