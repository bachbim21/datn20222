import { useJwt } from "react-jwt";
import imageE from "../../assets/images/elements.png";
import { useEffect, useState, useRef, useId } from "react";
import ElementService from "../../Service/element.service";
export default function Home() {
  const token = localStorage.getItem("token");
  const { decodedToken, isExpired } = useJwt(token);
  const [idElement, setIdElement] = useState(null);
  const react_id = useId();
  const boxElement = useRef(null);
  const boxEDrag = useRef(null);

  useEffect(() => {
    ElementService()
      .getAll()
      .then((response) => {
        if (response.length > 0) {
          response.map((e) => {
            const element = document.createElement(e.tag);
            element.setAttribute("id", e.tagId);
            if (e.tag == "input") {
              element.setAttribute("disabled", true);
              element.setAttribute("value", e.text);
            } else {
              element.innerText = e.text;
            }
            element.setAttribute("class", e.classes);
            element.setAttribute("draggable", true);
            element.addEventListener("dragstart", dragstart_handler);
            boxElement.current.appendChild(element);
            return;
          });
        }
      })
      .catch((err) => {});
  }, []);
  function dragstart_handler(ev) {
    // Add different types of drag data
    setIdElement(ev.target.id);
    ev.dataTransfer.dropEffect = "copy";
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);
    ev.dataTransfer.setData("id", ev.target.id);
    ev.dataTransfer.setData("tagName", ev.target.tagName);
  }
  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function drop_handler(ev) {
    ev.preventDefault();
    // Get the id of the target and add the moved element to the target's DOM
    const html = ev.dataTransfer.getData("text/html");
    const tagName = ev.dataTransfer.getData("tagname");
    let element = document.createElement(tagName);
    element.innerHTML = html;
    boxEDrag.current.innerHTML = boxEDrag.current.innerHTML + html;
  }
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
        <nav
          ref={boxElement}
          className="ml-8 mr-2 h-full flex flex-col gap-y-2"></nav>
      </div>
      <div
        ref={boxEDrag}
        className="mt-14 ml-40 h-[calc(100vh_-_3.5rem)] bg-black text-white"
        onDrop={drop_handler}
        onDragOver={dragover_handler}></div>
    </div>
  );
}
