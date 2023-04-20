import { useState, useEffect, useRef } from "react";
import imageE from "../../assets/images/elements.png";
import { useParams } from "react-router";
import {
  dragstart_handler,
  dragover_handler,
  drop_handler,
} from "../../app.function";
import ElementService from "../../Service/element.service";
import Element from "../../Components/Element/index";
import NodeService from "../../Service/node.sevice";
export default function Project() {
  const { id } = useParams();
  const [idElement, setIdElement] = useState(null);
  const [elements, setElements] = useState([]);
  const boxEDrag = useRef(null);

  useEffect(() => {
    ElementService()
      .getAll()
      .then((response) => {
        if (response.length > 0) {
          setElements(response);
          // response.map((e) => {
          //   const element = document.createElement(e.tag);
          //   element.setAttribute("id", e.tagId);
          //   if (e.tag == "input") {
          //     element.setAttribute("disabled", true);
          //     element.setAttribute("value", e.text);
          //   } else {
          //     element.innerText = e.text;
          //   }
          //   element.setAttribute("class", e.classes);
          //   element.setAttribute("draggable", true);
          //   element.addEventListener("dragstart", dragstart_handler);
          //   boxElement.current.appendChild(element);
          //   return;
          // });
        }
      })
      .catch((err) => {
        alert("Khong co quyen truy cap");
      });
    NodeService()
      .getOne(id)
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <div id="home" className="bg-default mt-14 h-[calc(100%_-_3.5rem)]">
      <div
        id="element"
        className="fixed w-40 bg-white h-[calc(100%_-_3.5rem)] shadow-xl shadow-yellow-950">
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
        <nav className="ml-8 mr-2 h-full flex flex-col gap-y-2">
          {elements.length > 0 &&
            elements.map((e) => {
              // let TagName = e.tag;
              return (
                <Element
                  key={e.id}
                  data={e}
                  draggable="true"
                  onDragStart={dragstart_handler}
                />
              );
            })}
        </nav>
      </div>
      <div
        ref={boxEDrag}
        className="mt-14 ml-40 h-[calc(100vh_-_3.5rem)] bg-black text-white"
        onDrop={drop_handler}
        onDragOver={dragover_handler}></div>
    </div>
  );
}
