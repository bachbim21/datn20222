import { sizeWindown } from "../../redux/selector";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ElementService from "../../Service/element.service";
import imageE from "../../assets/images/elements.png";
import { Input } from "antd";
import TreeFolder from "../TreeFolder";
import ElementDefault from "./element-default";
import { message } from "antd";
import { decode } from "../../utils/token";

export default function NavbarElement() {
  const [elements, setElements] = useState([]);
  const size = useSelector(sizeWindown);
  const decodedToken = decode();
  const elementService = new ElementService()
  function getListElement(param) {
    elementService
      .getAll(`query=${param}&page=0&size=1000`)
      .then((response) => {
        if (response.content.length > 0) {
          setElements(response.content);
        }
      })
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
      className="fixed w-40 bg-white border-r border-r-gray-300 top-14 left-0 bottom-0"
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
            height: `calc(${size.height}px - 210px)`,
          }}
          className="ml-6 flex flex-col items-center gap-y-2 overflow-y-scroll">
          {elements.length > 0 &&
            elements.map((e) => {
              return (
                <ElementDefault
                  key={e.id}
                  data={e}
                />
              );
            })}
        </nav>
        {decodedToken ? <TreeFolder /> : null}
      </div>
    </div>
  );
}
