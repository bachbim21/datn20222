import { useEffect } from "react";
import NavbarElement from "../../Components/Navbar/navbar";
import { useSelector } from "react-redux";
import { focusId, hoverId } from "../../redux/selector";
import {  message } from "antd";
import Property from "../../Components/Property";
import { generateUniqueId, handleClick, handleMouseLeave, handleMouseOver, handleZoom } from "../../utils/drag";
import clsx from "clsx";
import s from "../../assets/css/app.module.css"
export default function AnonymousProject(params) {

  const currentFocusId = useSelector(focusId);
  const currentHoverId = useSelector(hoverId);
  let rateScale = null;
  let mouse = {
    x: 0,
    y: 0
  };

  document.body.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });
  function ctrlC() {
    let elementToCopy = document.getElementById(currentFocusId);
    if (elementToCopy) {
      let htmlCopy = elementToCopy.outerHTML;
      navigator.clipboard
        .writeText(htmlCopy)
        .then(function() {
          message.info("Copy!")
        })
        .catch(function(error) {
          console.error("Failed to read copy text:", error);
        });
    }
  }

  function ctrlV() {
    let parent = document.getElementById(currentHoverId);
    let wrapperChild = document.createElement("div");
    if(!parent) return;
    navigator.clipboard
      .readText()
      .then(function(pastedText) {
        wrapperChild.innerHTML = pastedText;
        let childV = wrapperChild.firstElementChild
        childV.id = generateUniqueId()
        setLocationPasted(childV, parent, rateScale)
        parent.appendChild(childV)
        wrapperChild.remove();
        message.info("Pasted!")
      })
      .catch(function(error) {
        console.error("Failed to read pasted text:", error);
      });
  }
  function ctrlX() {
    if(currentFocusId =='root-page') return
    let elementToCopy = document.getElementById(currentFocusId);
    if (elementToCopy) {
      let htmlCopy = elementToCopy.outerHTML;
      navigator.clipboard
        .writeText(htmlCopy)
        .then(function() {
          elementToCopy.remove()
          message.info("Cut!")
        })
        .catch(function(error) {
          console.error("Failed to read copy text:", error);
        });
    }
  }
  function setLocationPasted(element, parent, rateScale) {
    let rect = parent.getBoundingClientRect();
    element.style.left = `${(
      (mouse.x - rect.left) /
      rateScale
    ).toFixed(4)}px`;
    element.style.top = `${(
      (mouse.y - rect.top) /
      rateScale
    ).toFixed(4)}px`;
    element.setAttribute("data-x", (mouse.x - rect.left) / rateScale);
    element.setAttribute("data-y", (mouse.y - rect.top) / rateScale);
  }
  useEffect(() => {
    const handleKeyDown = (ev) => {
      ev = ev || window.event;
      const key = ev.which || ev.keyCode;
      const ctrl = ev.ctrlKey
      if (key === 86 && ctrl && currentHoverId) {
        ctrlV()
      } else if (key === 67 && ctrl && currentFocusId) {
        ctrlC()
      } else if (key === 88 && ctrl && currentFocusId) {
        ctrlX()
      }
    };
    document.body.addEventListener("keydown", handleKeyDown, false);

    // Xóa sự kiện khi component unmount
    return () => {
      document.body.removeEventListener("keydown", handleKeyDown, false);
    };
  }, []);

  useEffect(()=>{
  let root  = document.getElementById("root-page")
    addEvent(root)
    handleScale()
  },[])
  function addEvent(root) {
    root.addEventListener("click", handleClick);
    root.addEventListener("mouseover", handleMouseOver);
    root.addEventListener("mouseleave", handleMouseLeave);
    // root.addEventListener("keydown", handleZoom);
  }


  useEffect(() => {
    window.addEventListener("resize", function() {
      handleScale();
    });
  }, [window.innerWidth, window.innerHeight]);

  function handleScale() {
    let rate = 1;
    let rootDom = document.getElementById("root-page");
    if (!rootDom) return;
    rate = (window.innerWidth - 220) / parseInt(rootDom.style.width);
    rootDom.style.transform = `scale(${rate.toFixed(2)})`;
    rateScale = rate.toFixed(2);
  }


  return (
    <div id="page-content" className={clsx(s['bg-default'], s['ml-40'], s['relative'])}>
      <NavbarElement />
      <div
        className={clsx(
          s['block'],
          s['p-5'],
          s['bg-custom'],
          s['overflow-scroll'],
          s['bottom-0']
        )}
        style={{
          width: `calc(${window.innerWidth}px - 10rem)`,
          height: `calc(${window.innerHeight}px - 3.5rem)`
        }}>
        <div className="top-0 block box-border"></div>
          <div id="root-page" className="bg-gray-300 " style={{
            width: "1000px",
            height: "1000px",
            transform: "width 0.5s ease-in-out, height 0.5s ease-in-out",
            transformOrigin: "top left",
            display: "block"
          }}></div>
      </div>
      <Property />
    </div>
  );
}
