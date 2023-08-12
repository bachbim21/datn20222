import Display from "./display";
import Text from "./text";
import Location from "./location";
import Border from "./border";
import Codemirror from "./codemirror";
import { focusId } from "../../redux/selector";
import { useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import { GiResize } from "react-icons/gi";
import { Tooltip } from "antd";
import { useEffect, useState } from "react";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"
export default function Property() {
  const idDom = useSelector(focusId);
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
    rate = (window.innerWidth - 220) / parseInt(rootDom.style.width);
    rootDom.style.transform = `scale(${rate.toFixed(2)})`;
  }
  if (idDom != null || idDom != undefined) {
    return (
      <ul
        className={clsx(
          s['z-10'],
          s['bg-custom'],
          s['rounded-l-sm'],
          s['w-11'],
          s['right-0'],
          s['fixed'],
          s['shadow-xl'],
          s['shadow-slate-400'],
          s['bottom-0']
        )}
        style={{
          top: "70px",
        }}>
        <Display dom={currentDom} />
        <Text dom={currentDom} />
        <Location dom={currentDom} />
        <Border dom={currentDom} />
        <Codemirror dom={currentDom} />
        <li
          className={clsx(
            s['flex'],
            s['items-center'],
            s['justify-center'],
            s['list-none'],
            s['border'],
            s['rounded'],
            s['m-1'],
            s['hover:border-blue-600'],
            s['aspect-square'],
            s['hover:bg-blue-200'],
            s['bg-gray-200'],
            s['cursor-pointer']
          )}
        >
          <Tooltip placement="leftTop" title="scale" onClick={handleScale}>
            <GiResize size="25px" />
          </Tooltip>
        </li>
        <li
          className={clsx(
            s['flex'],
            s['items-center'],
            s['justify-center'],
            s['list-none'],
            s['border'],
            s['rounded'],
            s['m-1'],
            s['hover:border-blue-600'],
            s['aspect-square'],
            s['hover:bg-blue-200'],
            s['bg-gray-200'],
            currentDom?.id === "root-page" ? s['cursor-not-allowed'] : s['cursor-pointer']
          )}
        >
          <Tooltip placement="leftTop" title="delete" onClick={handleDeleteDom}>
            <MdDeleteForever
              size="25px"
              color="red"
              opacity={currentDom?.id === "root-page" ? "0.5" : "1"}
            />
          </Tooltip>
        </li>
      </ul>
    );
  }
}
