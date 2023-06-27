import loading1 from "../../assets/svg/loading.svg";
export default function Loading({text}) {
  return <div className="fixed z-50 top-0 left-0 w-screen h-screen bg-gray-500/70 flex items-center justify-center">
    <div className="w-56 h-36 bg-white flex justify-center items-center rounded flex-col p-3">
      <img src={loading1} className="w-1/2"/>
      <span className="mb-2">{text ? text :"Đang xử lý..."}</span>
    </div>

  </div>

}