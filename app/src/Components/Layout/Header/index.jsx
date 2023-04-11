import logo from "../../../assets/images/go.png";
import avatar from "../../../assets/images/avatar.png";
export default function Header(params) {
  return (
    <header className="bg-default fixed w-screen flex flex-row justify-between h-14 z-10 top-0">
      <div className="flex items-center mx-5">
        {" "}
        <img src={logo} alt="" className="h-12 object-cover w-20" />
        <span className="italic font-sans"></span>
      </div>
      <div className="flex items-center mx-5">
        <img src={avatar} alt="image avatar" className="h-10" />
      </div>
    </header>
  );
}
