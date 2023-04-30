import { useState, useEffect, useRef } from "react";
import { dragover_handler, drop_handler } from "../../utils/app.function";
import NavbarElement from "../../Components/Element/navbar";

export default function AnonymousProject(params) {
  const [idElement, setIdElement] = useState(null);
  const boxEDrag = useRef(null);

  return (
    <div id="page-content" className="bg-default ml-40">
      <NavbarElement />
      <div className=" bg-black h-[calc(100%_-_3.5rem)] block bg-fixed">
        <div
          ref={boxEDrag}
          className="text-white bg-white"
          onDrop={drop_handler}
          onDragOver={dragover_handler}>
          alo
        </div>
      </div>
      {/* <AlertService type="success" text={textAleart} show={show} /> */}
    </div>
  );
}
