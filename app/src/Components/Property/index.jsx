import Display from "./display";
import Text from "./text";
import Location from "./location";
import Border from "./border";
import Codemirror from "./codemirror";
import { focusId } from "../../redux/selector";
import { useSelector } from "react-redux";
import { MdDeleteForever } from "react-icons/md";
import {BiImageAdd} from "react-icons/bi"
import { GiResize } from "react-icons/gi";
import { Tooltip } from "antd";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import s from "../../assets/css/app.module.css";
import CssService from "../../Service/css.service";

export default function Property({ data }) {
  const idDom = useSelector(focusId);
  const refImg = useRef()
  const cssService = new CssService();
  let library = data?.tech?.cssFrameWork;
  const [textColor, setTextColor] = useState([]);
  const [textSize, setTextSize] = useState([]);
  const [textWeight, setTextWeight] = useState([]);
  const [textAlign, setTextAlign] = useState([]);
  const [borderWidth, setBorderWidth] = useState([]);
  const [borderRadius, setBorderRadius] = useState([]);
  const [borderColor, setBorderColor] = useState([]);
  const [borderStyle, setBorderStyle] = useState([]);
  const [bgColor, setBgColor] = useState([]);

  const [currentDom, setDom] = useState(document.getElementById(idDom));
  useEffect(() => {
    setDom(document.getElementById(idDom));
    console.log(idDom);
  }, [idDom]);

  useEffect(() => {
    if (!library) library = "tailwind";
    var param1 = "query=name==border-width;library==" + library + "&page=0&size=1000";
    cssService.getPage(param1).then((res) => {
      setBorderWidth(res.content)
    });
    var param2 = "query=name==border-radius;library==" + library + "&page=0&size=1000";
    cssService.getPage(param2).then((res) => {
      setBorderRadius(res.content)
    });
    var param3 = "query=name==border-color;library==" + library + "&page=0&size=1000";
    cssService.getPage(param3).then((res) => {
      setBorderColor(res.content)
    });
    var param3 = "query=name==border-style;library==" + library + "&page=0&size=1000";
    cssService.getPage(param3).then((res) => {
     setBorderStyle(res.content)
    });
    var param4 = "query=name==background-color;library==" + library + "&page=0&size=1000";
    cssService.getPage(param4).then((res) => {
      setBgColor(res.content)
    });
    var param5 = "query=name==text-color;library==" + library + "&page=0&size=1000";
    cssService.getPage(param5).then((res) => {
      setTextColor(res.content)
    });
    var param6 = "query=name==text-size;library==" + library + "&page=0&size=1000";
    cssService.getPage(param6).then((res) => {
      setTextSize(res.content)
    });
    var param7 = "query=name==text-weight;library==" + library + "&page=0&size=1000";
    cssService.getPage(param7).then((res) => {
      setTextWeight(res.content)
    });
    var param8 = "query=name==text-align;library==" + library + "&page=0&size=1000";
    cssService.getPage(param8).then((res) => {
      setTextAlign(res.content)
    });
  }, [library]);

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
  function handleAddImg() {
    const imageInput = document.getElementById('imageInput');
    imageInput.click()
    imageInput.removeEventListener('change', imgToBase64);
    imageInput.addEventListener('change', imgToBase64);
  }
  function imgToBase64(event) {
    const selectedImage = event.target.files[0];
    if (selectedImage && selectedImage.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const base64Image = e.target.result;
        currentDom.src = base64Image;
      };
      reader.readAsDataURL(selectedImage);
    }
    const imageInput = document.getElementById('imageInput');
    imageInput.removeEventListener('change', imgToBase64);
  }

  if (idDom != null || idDom != undefined) {
    return (
      <ul
        className={clsx(
          s["z-10"],
          s["bg-custom"],
          s["rounded-l-sm"],
          s["w-11"],
          s["right-0"],
          s["fixed"],
          s["shadow-xl"],
          s["shadow-slate-400"],
          s["bottom-0"]
        )}
        style={{
          top: "70px"
        }}>
        <Display dom={currentDom} bgColor={bgColor}/>
        <Text dom={currentDom} textSize={textSize} textColor={textColor} textWeight={textWeight} textAlign={textAlign}/>
        <Location dom={currentDom}/>
        <Border dom={currentDom} borderRadius={borderRadius} borderWidth={borderWidth} borderColor={borderColor} borderStyle={borderStyle}/>
        <Codemirror dom={currentDom} />
        <li
          className={clsx(
            s["flex"],
            s["items-center"],
            s["justify-center"],
            s["list-none"],
            s["border"],
            s["rounded"],
            s["m-1"],
            s["hover:border-blue-600"],
            s["aspect-square"],
            s["hover:bg-blue-200"],
            s["bg-gray-200"],
            s["cursor-pointer"]
          )}
        >
          <Tooltip placement="leftTop" title="scale" onClick={handleScale}>
            <GiResize size="25px" />
          </Tooltip>
        </li>
        {(currentDom?.tagName =='img' || currentDom?.tagName =='IMG') && <li
          className={clsx(
            s["flex"],
            s["items-center"],
            s["justify-center"],
            s["list-none"],
            s["border"],
            s["rounded"],
            s["m-1"],
            s["hover:border-blue-600"],
            s["aspect-square"],
            s["hover:bg-blue-200"],
            s["bg-gray-200"],
            s["cursor-pointer"]
          )}
        >
          <Tooltip placement="leftTop" title="image" onClick={handleAddImg}>
            <BiImageAdd
              size="25px"
            />
          </Tooltip>
        </li>}
        <li
          className={clsx(
            s["flex"],
            s["items-center"],
            s["justify-center"],
            s["list-none"],
            s["border"],
            s["rounded"],
            s["m-1"],
            s["hover:border-blue-600"],
            s["aspect-square"],
            s["hover:bg-blue-200"],
            s["bg-gray-200"],
            currentDom?.id === "root-page" ? s["cursor-not-allowed"] : s["cursor-pointer"]
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
