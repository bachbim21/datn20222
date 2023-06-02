import { sizeWindown } from "../../redux/selector";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ElementService from "../../Service/element.service";
import imageE from "../../assets/images/elements.png";
import { dragStartCopy } from "../../utils/app.function";
import { Input } from "antd";
import TreeFolder from "../TreeFolder";
import ElementDefault from "./element-default";

export default function NavbarElement({ project }) {
  const [elements, setElements] = useState([]);
  const size = useSelector(sizeWindown);
  function getListElement(param) {
    ElementService()
      .getAll(`query=${param}&page=0&size=1000`)
      .then((response) => {
        if (response.length > 0) {
          setElements(response);
        }
      })
      .catch((err) => {
        alert("Khong co quyen truy cap");
      });
  }
  useEffect(() => {
    getListElement("");
  }, []);
  function searchElement(e) {
    let tag = e.target.value;
    let params = "";
    if (tag != null && tag != "") {
      params = `tag==${tag}`;
    }
    getListElement(params);
  }

  return (
    <div
      id="element"
      className="fixed w-40 bg-custom  shadow-xl shadow-yellow-950 top-14 left-0 bottom-0"
      style={{
        zIndex: 5,
      }}>
      <div className="relative h-full">
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
          style={{
            height: `calc(${size.height}px - 204px)`,
          }}
          className="ml-6 flex flex-col items-center gap-y-2 overflow-y-scroll">
          {elements.length > 0 &&
            elements.map((e) => {
              return (
                <ElementDefault
                  key={e.id}
                  data={e}
                  draggable="true"
                  onDragStart={(e) => dragStartCopy(e)}
                />
              );
            })}
        </nav>
        <TreeFolder />
      </div>
    </div>
  );
}