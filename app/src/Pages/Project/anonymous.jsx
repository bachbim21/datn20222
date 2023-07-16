import { useEffect } from "react";
import NavbarElement from "../../Components/Navbar/navbar";
import { useSelector } from "react-redux";
import { domId, hoverId } from "../../redux/selector";
import {  message } from "antd";
import Property from "../../Components/Property";
import { handleClick, handleMouseLeave, handleMouseOver } from "../../utils/drag";

export default function AnonymousProject(params) {

  const currentDomId = useSelector(domId);
  const domIdHover = useSelector(hoverId);
  let rateScale = null;

  function ctrlC(event) {
    if (event.ctrlKey && event.key === "c") {
      var elementToCopy = document.getElementById(currentDomId);
      if (elementToCopy) {
        event.preventDefault();
        var htmlCopy = elementToCopy.outerHTML;

        navigator.clipboard.writeText(htmlCopy)
          .then(function() {
            console.log('copy!');
            document.removeEventListener("keydown", ctrlC);
          })
          .catch(function(error) {
            console.error("Failed to copy text to clipboard:", error);
          });
      }
    }
  }

  useEffect(() => {
    if (!currentDomId) return;
    document.addEventListener("keydown", ctrlC);
  }, [currentDomId]);

  function ctrlV(event) {
    if (event.ctrlKey && event.key === "v") {
      event.preventDefault();
      if (!domIdHover) message.warning("Vị trí thêm không hợp lệ");
      var parent = document.getElementById(domIdHover);
      var child = document.createElement("div");
      navigator.clipboard.readText()
        .then(function(pastedText) {
          child.innerHTML = pastedText;
          console.log('copy!');
          document.removeEventListener("keydown", ctrlV);
        })
        .catch(function(error) {
          console.error("Failed to read pasted text:", error);
        });
    }
  }
  useEffect(()=>{
  let root  = document.getElementById("root-page")
    addEvent(root)
  },[])
  function addEvent(root) {
    root.addEventListener("click", handleClick);
    root.addEventListener("mouseover", handleMouseOver);
    root.addEventListener("mouseleave", handleMouseLeave);
  }
  useEffect(() => {
    if (!domIdHover) return;
    document.addEventListener("keydown", ctrlV);
  }, [domIdHover]);

  useEffect(() => {
    window.addEventListener("resize", function() {
      handleScale();
    });
  }, [window.innerWidth, window.innerHeight]);

  function handleScale() {
    let rate = 1;
    let rootDom = document.getElementById("root-page");
    console.log(rootDom);
    if (!rootDom) return;
    rate = (window.innerWidth - 220) / parseInt(rootDom.style.width);
    rootDom.style.transform = `scale(${rate.toFixed(2)})`;
    rateScale = rate.toFixed(2);
  }


  return (
    <div id="page-content" className="bg-default ml-40 relative">
      <NavbarElement />
      <div
        className="block p-5 bg-custom overflow-scroll bottom-0"
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
