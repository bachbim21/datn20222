import React, { useState } from "react";
import NodeService from "../../Service/node.sevice";
import { decoded } from "../../app.function";
import { useRef } from "react";
import { message } from "../../app.constants";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export default function PopCreate({ id, setState }) {
  const token = localStorage.getItem("token");
  // const { decodedToken, isExpired } = useJwt(token);
  const navigate = useNavigate();
  const def = useRef();
  const react = useRef();
  const tailwind = useRef();
  const bootstrap = useRef();
  const [check, setCheck] = useState(true);
  function handleCreate(e) {
    e.preventDefault();

    let node = {
      name: e.target["name"].value,
      level: 0,
      folder: true,
      tech: { id: null },
      user: { id: decoded.user_id },
    };
    if (node.name.trim() === "") {
      setCheck(false);
      return 0;
    } else if (check == false && node.name.trim() !== "") {
      setCheck(true);
    }
    if (e.target["default"].checked && e.target["tailwind"].checked) {
      node.tech.id = 1;
    }
    if (e.target["default"].checked && e.target["bootstrap"].checked) {
      node.tech.id = 3;
    }
    if (e.target["react"].checked && e.target["tailwind"].checked) {
      node.tech.id = 2;
    }
    if (e.target["react"].checked && e.target["bootstrap"].checked) {
      node.tech.id = 4;
    }

    // create
    setState(true);
    NodeService()
      .create(node)
      .then((response) => {
        setState(false);
        if (response.id) {
          navigate("/project/" + response.id);
        }
      });
  }

  function checkTypeTech(e) {
    switch (e.target.id) {
      case "react":
        if (e.target.checked && def.current.checked) {
          def.current.checked = false;
          e.target.checked = true;
        }

      case "default":
        if (e.target.checked && react.current.checked) {
          react.current.checked = false;
          e.target.checked = true;
        }
      case "tailwind":
        if (e.target.checked && bootstrap.current.checked) {
          bootstrap.current.checked = false;
          e.target.checked = true;
        }
      case "bootstrap":
        if (e.target.checked && tailwind.current.checked) {
          tailwind.current.checked = false;
          e.target.checked = true;
        }
      default:
        return;
    }
  }
  return (
    <form onSubmit={handleCreate}>
      <input type="checkbox" id={id} className="modal-checkbox" />
      <div className="modal">
        <div className="modal-content w-cp">
          <div className=" border-red-900 border-b-2">
            <h2 className=" pb-1 inline-block text-lg px-2">Tạo dự án</h2>
            <label htmlFor={id} className="float-right">
              <AiFillCloseCircle size={20} />
            </label>
          </div>
          <div className="grid grid-cols-4 gap-y-5 gap-x-3 p-5 items-center">
            <label htmlFor="name">
              <b>
                Tên dự án<span>*</span>
              </b>
            </label>
            <div className="col-span-3 w-full relative">
              <input
                id="name"
                name="project_name"
                type="text"
                className="border-2 border-gray-300 p-2 hover:border-gray-500  focus:border-gray-500 rounded w-full block"
                placeholder="tên dự án"
              />{" "}
              <span className="text-red-500 text-sm absolute">
                {!check && message.log_required}
              </span>
            </div>

            <h4 className="">
              <b>
                Công nghệ<span>*</span>
              </b>
            </h4>
            <div className="grid grid-cols-3 gap-y-4 gap-x-1 col-span-3">
              <h4>
                <b>
                  Tempalte<span>:</span>
                </b>
              </h4>
              <div className="grid grid-cols-2">
                <label
                  htmlFor="react"
                  className="text-sm"
                  onClick={checkTypeTech}>
                  <b>React</b>
                </label>
                <input
                  ref={react}
                  id="react"
                  name="react"
                  type="checkbox"
                  onClick={checkTypeTech}
                />
              </div>
              <div className="grid grid-cols-2">
                <label
                  htmlFor="default"
                  className="text-sm"
                  onClick={checkTypeTech}>
                  <b>Mặc định</b>
                </label>
                <input
                  ref={def}
                  name="default"
                  id="default"
                  type="checkbox"
                  onClick={checkTypeTech}
                />
              </div>
              <h4>
                <b>
                  CSS<span>:</span>
                </b>
              </h4>
              <div className="grid grid-cols-2">
                <label
                  htmlFor="tailwind"
                  className="text-sm"
                  onClick={checkTypeTech}>
                  <b>TailWind</b>
                </label>
                <input
                  ref={tailwind}
                  name="tailwind"
                  id="tailwind"
                  type="checkbox"
                  onClick={checkTypeTech}
                />
              </div>
              <div className="grid grid-cols-2">
                <label
                  htmlFor="bootstrap"
                  className="text-sm"
                  onClick={checkTypeTech}>
                  <b>Bootstrap</b>
                </label>
                <input
                  ref={bootstrap}
                  name="bootstrap"
                  id="bootstrap"
                  type="checkbox"
                  onClick={checkTypeTech}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 my-4">
            <button className="p-1 w-20 text-white text-center bg-blue-600 rounded hover:bg-blue-300">
              Đồng ý
            </button>
            <label
              htmlFor={id}
              className=" border border-stone-400 w-20 text-center text-black p-1 rounded cursor-pointer hover:bg-slate-400">
              Huỷ
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}
