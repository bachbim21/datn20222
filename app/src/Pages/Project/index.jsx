import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router";
import { dragover_handler, drop_handler } from "../../utils/app.function";
import NavbarElement from "../../Components/Element/navbar";
import NodeService from "../../Service/node.sevice";
export default function Project() {
  const { id } = useParams();
  const [idElement, setIdElement] = useState(null);
  const boxEDrag = useRef(null);

  useEffect(() => {
    NodeService()
      .getOne(id)
      .then((response) => {
        console.log(response);
      });
  }, []);
  return (
    <div id="page-content" className="bg-default min-h-screen ml-40">
      <NavbarElement />
      <div className="min-h-screen bg-black block">
        <div
          ref={boxEDrag}
          className="text-white"
          onDrop={drop_handler}
          onDragOver={dragover_handler}></div>
      </div>
    </div>
  );
}
