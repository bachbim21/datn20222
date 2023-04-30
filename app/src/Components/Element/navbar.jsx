import Element from "./element";
import { useState, useEffect } from "react";
import ElementService from "../../Service/element.service";
import imageE from "../../assets/images/elements.png";
import { dragstart_handler } from "../../utils/app.function";
import { Input } from "antd";

export default function NavbarElement(params) {
  const [elements, setElements] = useState([]);
  useEffect(() => {
    ElementService()
      .getAll()
      .then((response) => {
        if (response.length > 0) {
          setElements(response);
        }
      })
      .catch((err) => {
        alert("Khong co quyen truy cap");
      });
  }, []);
  function searchElement(e) {
    console.log(e.target.value);
  }

  return (
    <div
      id="element"
      className="fixed w-40 bg-custom  shadow-xl shadow-yellow-950 top-14 left-0 bottom-0">
      <div className="relative">
        <div className="flex flex-row items-center">
          <img
            src={imageE}
            alt=""
            className="h-8 object-cover m-3 inline-block"
          />
          <h1 className="text-center font-semibold text-xl inline-block">
            Element
          </h1>
        </div>
        <div className="px-4 py-2">
          <Input onChange={searchElement} placeholder="tìm kiếm" />
        </div>
        <nav
          className="ml-8 mr-2 h-full flex flex-col gap-y-2 overflow-y-scroll"
          style={{ minHeight: "200px" }}>
          {elements.length > 0 &&
            elements.map((e) => {
              return (
                <Element
                  key={e.id}
                  data={e}
                  draggable="true"
                  onDragStart={dragstart_handler}
                />
              );
            })}
        </nav>
      </div>
    </div>
  );
}
