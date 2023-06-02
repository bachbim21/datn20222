import Display from "./display";
import Text from "./text";
import Location from "./location";
import Border from "./border";
import Codemirror from "./codemirror";
import { domId } from "../../redux/selector";
import { useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { GiResize } from "react-icons/gi";
import { Tooltip } from "antd";
import { useEffect, useState } from "react";
export default function Property() {
  const idDom = useSelector(domId);
  const [currentDom, setDom] = useState(document.getElementById(idDom));
  useEffect(() => {
    setDom(document.getElementById(idDom));
  }, [idDom]);
  function handleDeleteDom() {
    if (currentDom == null || currentDom.id == "root-page") return;
    currentDom.remove();
  }
  function handleScale() {
    let rate = 1;
    let rootDom = document.getElementById("root-page");
    if (parseInt(rootDom.style.width) > window.innerWidth - 200) {
      rate = (window.innerWidth - 200) / parseInt(rootDom.style.width);
    } else {
      rate = parseInt(rootDom.style.width) / (window.innerWidth - 200);
    }
    rootDom.style.transform = `scale(${rate})`;
  }
  if (idDom != null || idDom != undefined) {
    return (
      <ul
        className="z-10 bg-custom rounded-l-sm w-11 right-0 fixed shadow-xl shadow-slate-400 bottom-0"
        style={{
          top: "70px",
        }}>
        <Display dom={currentDom} />
        <Text dom={currentDom} />
        <Location dom={currentDom} />
        <Border dom={currentDom} />
        <Codemirror dom={currentDom} />
        <li className="flex items-center justify-center list-none  border rounded m-1 hover:border-blue-600 aspect-square hover:bg-blue-200 bg-gray-200  cursor-pointer">
          <Tooltip placement="leftTop" title="scale" onClick={handleScale}>
            <GiResize size="25px" />
          </Tooltip>
        </li>
        <li
          className={`flex items-center justify-center list-none  border rounded m-1 hover:border-blue-600 aspect-square hover:bg-blue-200 bg-gray-200 ${
            currentDom?.id == "root-page"
              ? " cursor-not-allowed "
              : " cursor-pointer"
          }`}>
          <Tooltip placement="leftTop" title="delete" onClick={handleDeleteDom}>
            <MdDeleteForever
              size="25px"
              color="red"
              opacity={currentDom?.id == "root-page" ? "0.5" : "1"}
            />
          </Tooltip>
        </li>
      </ul>
    );
  }
}
