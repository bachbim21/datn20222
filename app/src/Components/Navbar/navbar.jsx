import { sizeWindown } from "../../redux/selector";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ElementService from "../../Service/element.service";
import imageE from "../../assets/images/elements.png";
import { Input } from "antd";
import TreeFolder from "../TreeFolder";
import ElementDefault from "./element-default";
import { decode } from "../../utils/token";
import LoadingDetail from "../Loading&Popup/LoadingDetail";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"
export default function NavbarElement({data}) {
  const [elements, setElements] = useState([]);
  const size = useSelector(sizeWindown);
  const decodedToken = decode();
  const elementService = new ElementService();
  var init = false;
  function getListElement(param) {
    elementService
      .getPage(`query=${param}&page=0&size=1000&sort=tag`)
      .then((response) => {
        if (response.content.length > 0) {
          setElements(response.content);
        }
        init = true;
      });
  }
  useEffect(() => {
    getListElement("");
  }, []);
  function searchElement(e) {
    let tag = e.target.value;
    let params = "";
    if (tag != null && tag != "") {
      params = `tag==*${tag}*`;
    }
    getListElement(params);
  }

  return (
    <div
      id="element"
      className={clsx(s['fixed'], s['w-40'], s['bg-white'], s['border-r'], s['border-r-gray-300'], s['top-14'], s['left-0'], s['bottom-0'])}
      style={{
        zIndex: 5,
      }}
    >
      <div className={clsx(s['relative'], s['h-full'])}>
        <div className={clsx(s['flex'], s['flex-row'], s['items-center'])}>
          <img
            src={imageE}
            alt=""
            className={clsx(s['h-8'], s['object-cover'], s['m-3'], s['inline-block'])}
          />
          <h1 className={clsx(s['text-center'], s['font-semibold'], s['text-xl'], s['inline-block'])}>
            Element
          </h1>
        </div>
        <div className={clsx(s['px-4'], s['py-2'])}>
          <Input onChange={searchElement} placeholder="tìm kiếm" />
        </div>
        <nav
          style={{
            height: `calc(${size.height}px - 210px)`,
          }}
          className={clsx(s['ml-6'], s['flex'], s['flex-col'], s['items-center'], s['gap-y-2'], s['overflow-y-scroll'])}
        >
          {elements.length > 0 &&
            elements.map((e) => {
              return <ElementDefault key={e.id} dom={e} data={data}/>;
            })}
        </nav>
        {elements?.length == 0 && !init && <LoadingDetail />}
        {decodedToken ? <TreeFolder /> : null}
      </div>
    </div>
  );
}
