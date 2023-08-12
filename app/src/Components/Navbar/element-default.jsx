import { dragStartCopy } from "../../utils/drag";
import ReactHtmlParser from "react-html-parser";
import React from "react";

export default function ElementDefault({ data }) {
  return (
    <li style={{
      width: "110px",
      listStyleType: "none",
    }}
        className="border-2 border-transparent cursor-grabbing rounded shadow-md hover:border-red-500 hover:border-2"
        draggable={true}
        onDragStart={dragStartCopy}>
      {ReactHtmlParser(data.code)}
    </li>
  );
}
