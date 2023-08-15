import { dragStartCopy } from "../../utils/drag";
import ReactHtmlParser from "react-html-parser";
import React, { useEffect } from "react";
import { useRef } from "react";

export default function ElementDefault({dom, data }) {
  const ref = useRef()
  useEffect(()=> {
    ref.current.setAttribute("data-type", dom.type);
    ref.current.setAttribute("data-library", data?.tech?.cssFrameWork);
  },[data])

  return (
    <li style={{
      width: "110px",
      listStyleType: "none",
    }}
        ref={ref}
        className="border-2 border-transparent cursor-grabbing rounded shadow-md hover:border-red-500 hover:border-2"
        draggable={true}
        onDragStart={dragStartCopy}>
      {ReactHtmlParser(dom.code)}
    </li>
  );
}
