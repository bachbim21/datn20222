import { decoded } from "../../app.function";
import PopCreate from "../../Components/Notify/popup.create";
import PopupLoading from "../../Components/Notify/loading.service";
import { useEffect, useState } from "react";
import NodeService from "../../Service/node.sevice";

export default function Home() {
  const [isLoading, setIsloading] = useState(false);
  let formCreate = "create_project";
  console.log(decoded);
  if (decoded.user_id) {
    NodeService()
      .getAll(decoded.user_id)
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <div
      id="home"
      className="bg-black mt-14 h-screen flex justify-center items-center">
      <div className="text-white flex flex-col gap-3">
        <label
          htmlFor={formCreate}
          className="p-2 bg-blue-600 rounded modal-label">
          Dự án mới
        </label>
        <div>
          <h4 className="p-2 bg-slate-500 rounded">Dự án của bạn</h4>
          <ul className="grid grid-cols-2">
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
          </ul>
        </div>
      </div>
      <PopCreate id={formCreate} setState={setIsloading} />
      <PopupLoading isLoading={isLoading} />
    </div>
  );
}
